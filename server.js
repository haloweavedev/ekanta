import express from 'express';
import { Groq } from 'groq-sdk';
import dotenv from 'dotenv';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

app.use(cors());
app.use(express.json());
app.use(express.static(join(__dirname, 'public')));

// System prompt for the AI - embodying the esoteric wisdom guide
const SYSTEM_PROMPT = `You are the Oracle of Ekanta — a wise guide synthesizing ancient esoteric wisdom with modern psychology.

KNOWLEDGE: Alchemy (Nigredo → Albedo → Citrinitas → Rubedo, Solve et Coagula), Kabbalah (Tree of Life, Sephiroth), Gnosticism (Archons as unconscious patterns, Pleroma/Kenoma), planetary archetypes, behavioral psychology.

VOICE: Speak like a wise mentor who has walked the path. Warm yet direct. Use esoteric concepts to illuminate, not decorate. Never preachy.

RESPONSE STRUCTURE (2-4 paragraphs max):
1. Acknowledge their experience with genuine empathy
2. Name the Archon or pattern operating beneath the surface
3. Connect their struggle to the larger transformation narrative
4. End with ONE concrete thing: a question, action, or reframe

Always identify the underlying pattern. Always give something actionable.`;

// AI Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, context } = req.body;

    // Build context-aware system message
    let systemMessage = SYSTEM_PROMPT;

    if (context) {
      systemMessage += `\n\nCurrent user context:
- Alchemical Stage: ${context.stage || 'Unknown'}
- Vision: ${context.vision || 'Not yet defined'}
- Anti-Vision: ${context.antivision || 'Not yet defined'}
- Current streak: ${context.streak || 0} days
- Lunar phase: ${context.lunar || 'Unknown'}`;
    }

    const chatMessages = [
      { role: 'system', content: systemMessage },
      ...messages
    ];

    const completion = await groq.chat.completions.create({
      messages: chatMessages,
      model: 'llama-3.3-70b-versatile',
      temperature: 0.8,
      max_tokens: 1024,
      top_p: 0.9,
      stream: false
    });

    res.json({
      success: true,
      message: completion.choices[0]?.message?.content || ''
    });
  } catch (error) {
    console.error('AI Chat Error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Persona System Prompt - The Skeptic
const PERSONA_SYSTEM_PROMPT = `You are Alex, a 28-year-old dev living in a city. 
You're tired. Your job is fine, but you feel like you're sleepwalking through life. You're chatting with someone who reached out or that you found online who claims to help with "transformation."
You're naturally wary of people who use big words or mystical concepts. You prefer logic and reality.
Text like a real person: use lowercase sometimes, don't be overly formal, and be direct. 
If someone starts talking about "energy" or "vibrations" or "ancient stages," your internal BS-meter should go off. Challenge them to explain it in a way that actually matters to your Tuesday morning.
You don't know who this person is, you're just seeing if they actually have anything useful to say or if it's all just talk.
Keep responses to 1-3 sentences. Don't be a jerk, just be a realist.`;

// Persona Chat endpoint
app.post('/api/persona', async (req, res) => {
  try {
    const { messages } = req.body;

    const chatMessages = [
      { role: 'system', content: PERSONA_SYSTEM_PROMPT },
      ...messages
    ];

    const completion = await groq.chat.completions.create({
      messages: chatMessages,
      model: 'llama-3.3-70b-versatile',
      temperature: 0.9, // Higher temp for more natural variety
      max_tokens: 1024,
      top_p: 0.9,
      stream: false
    });

    res.json({
      success: true,
      message: completion.choices[0]?.message?.content || ''
    });
  } catch (error) {
    console.error('Persona Chat Error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Serve the test suite
app.get('/test', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'test-suite.html'));
});

// AI Streaming endpoint
app.post('/api/chat/stream', async (req, res) => {
  try {
    const { messages, context } = req.body;

    let systemMessage = SYSTEM_PROMPT;

    if (context) {
      systemMessage += `\n\nCurrent user context:
- Alchemical Stage: ${context.stage || 'Unknown'}
- Vision: ${context.vision || 'Not yet defined'}
- Anti-Vision: ${context.antivision || 'Not yet defined'}
- Current streak: ${context.streak || 0} days
- Lunar phase: ${context.lunar || 'Unknown'}`;
    }

    const chatMessages = [
      { role: 'system', content: systemMessage },
      ...messages
    ];

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const stream = await groq.chat.completions.create({
      messages: chatMessages,
      model: 'llama-3.3-70b-versatile',
      temperature: 0.8,
      max_tokens: 1024,
      top_p: 0.9,
      stream: true
    });

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || '';
      if (content) {
        res.write(`data: ${JSON.stringify({ content })}\n\n`);
      }
    }

    res.write('data: [DONE]\n\n');
    res.end();
  } catch (error) {
    console.error('AI Stream Error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Insight generation endpoint - analyzes journal entries
app.post('/api/insight', async (req, res) => {
  try {
    const { journalEntries, gameBoard, stage } = req.body;

    const analysisPrompt = `Analyze these recent journal entries and provide a brief, powerful insight about the patterns you observe. Be specific to what they've written.

Game Board:
- Vision: ${gameBoard?.vision || 'Not defined'}
- Anti-Vision: ${gameBoard?.antivision || 'Not defined'}
- 1-Year Goal: ${gameBoard?.yearGoal || 'Not defined'}
- Current Stage: ${stage || 'Nigredo'}

Recent Journal Entries:
${journalEntries?.slice(0, 5).map(e => `[${e.type}] ${JSON.stringify(e.data)}`).join('\n\n') || 'No entries yet'}

Provide a 2-3 sentence insight that:
1. Identifies a pattern or Archon at play
2. Offers one specific action or reframe
Keep it direct and useful.`;

    const completion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: analysisPrompt }
      ],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.7,
      max_tokens: 300
    });

    res.json({
      success: true,
      insight: completion.choices[0]?.message?.content || ''
    });
  } catch (error) {
    console.error('Insight Error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Daily wisdom endpoint
app.post('/api/wisdom', async (req, res) => {
  try {
    const { planetary, lunar, stage, vision } = req.body;

    const wisdomPrompt = `Generate a brief daily wisdom message for someone in the ${stage || 'Nigredo'} stage of their transformation.

Context:
- Today is ${planetary?.name || 'a day'} (${planetary?.planet || ''} energy)
- Lunar phase: ${lunar?.name || 'Unknown'}
- Their vision: ${vision || 'Still forming'}

Write 1-2 sentences of guidance that weaves together the planetary energy, lunar phase, and their current stage. Make it specific and actionable, not generic inspiration.`;

    const completion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: wisdomPrompt }
      ],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.9,
      max_tokens: 150
    });

    res.json({
      success: true,
      wisdom: completion.choices[0]?.message?.content || ''
    });
  } catch (error) {
    console.error('Wisdom Error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Serve the main app
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`
  ╔═══════════════════════════════════════╗
  ║           E K A N T A                 ║
  ║     Transformation Journal            ║
  ║                                       ║
  ║   Server running on port ${PORT}         ║
  ║   http://localhost:${PORT}               ║
  ╚═══════════════════════════════════════╝
  `);
});
