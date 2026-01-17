# Ekanta — Build Prompt

## Overview

Build **Ekanta** (Sanskrit: "absolutely one") — a transformation journal app that synthesizes modern behavioral psychology with ancient esoteric wisdom systems.

The app combines Dan Koe's "Reset Day" protocol (from `article.md`) with the symbolic frameworks of alchemy, Kabbalah, Gnosticism, and astrology (from `my-interests.md`).

**Build this as a single HTML file with embedded CSS and JS. No frameworks. No external dependencies except Google Fonts.**

---

## Source Documents

You have two source documents to draw from:

1. **article.md** — Dan Koe's transformation framework covering:
   - The psychology of why people stay stuck (identity, unconscious goals, fear)
   - The 3-phase Reset Day protocol (Morning excavation → Day interrupts → Evening synthesis)
   - The 6-component "game board" (Anti-vision, Vision, 1-year goal, 1-month project, Daily levers, Constraints)
   - The video game metaphor for life design

2. **my-interests.md** — Esoteric systems mapping covering:
   - Alchemy: Nigredo → Albedo → Citrinitas → Rubedo stages
   - Kabbalah: Tree of Life, Four Worlds (Atziluth → Assiah), key Sephiroth
   - Gnosticism: Kenoma/Pleroma, Archons, Gnosis, the awakening narrative
   - Astrology: Planetary archetypes, lunar cycles, timing systems
   - Cross-system mappings and symbolic language library

---

## App Structure

### 1. Welcome / Onboarding Flow

A brief, atmospheric introduction:
- App name "Ekanta" with tagline
- Brief explanation: "A transformation journal combining ancient wisdom with modern psychology"
- Option to enter birth date (for basic astro features — just sun sign and current lunar phase)
- "Begin the Work" button

### 2. Main Dashboard — "The Great Work"

The central hub, visually inspired by alchemical/kabbalistic aesthetics:

**Header:**
- Current lunar phase icon + name (calculate from current date)
- Current alchemical stage indicator (user progresses through Nigredo → Rubedo based on app usage)
- Day streak counter

**The Game Board (6 Components):**
Display these as a visual hierarchy or tree structure:

```
         ┌─────────────┐
         │   VISION    │  ← Pleroma / Rubedo / Kether
         │  (The Win)  │
         └──────┬──────┘
                │
    ┌───────────┴───────────┐
    │                       │
┌───┴───┐               ┌───┴───┐
│ ANTI- │               │CONST- │
│VISION │               │RAINTS │  ← Kenoma / Saturn
│(Stakes)│              │(Rules)│
└───┬───┘               └───┬───┘
    │                       │
    └───────────┬───────────┘
                │
         ┌──────┴──────┐
         │  1-YR GOAL  │  ← Tiphareth / Briah
         │ (Mission)   │
         └──────┬──────┘
                │
         ┌──────┴──────┐
         │ 1-MO PROJECT│  ← Yetzirah
         │(Boss Fight) │
         └──────┬──────┘
                │
         ┌──────┴──────┐
         │DAILY LEVERS │  ← Malkuth / Assiah / Mars
         │  (Quests)   │
         └─────────────┘
```

Each component is clickable to view/edit.

**Quick Actions:**
- "Morning Practice" button
- "Evening Reflection" button
- "Reset Day" button (for the full protocol)

### 3. Reset Day Protocol — "The Great Work in One Day"

A guided, multi-phase experience:

**Phase 1: Dawn — Nigredo (Morning Excavation)**
*~30 min estimated*

Introduction text:
> "You enter the Nigredo — the blackening. This is where transformation begins: in honest confrontation with what is. The Archons that keep you bound hide in comfort and denial. We expose them now."

Sequential journal prompts (from article.md):
1. "What is the dull and persistent dissatisfaction you've learned to live with?"
2. "What do you complain about repeatedly but never actually change? List three."
3. "For each complaint: What would someone watching your behavior (not words) conclude you actually want?"
4. "What truth about your current life would be unbearable to admit to someone you deeply respect?"

Then Anti-Vision prompts:
5. "If nothing changes for 5 years, describe an average Tuesday in vivid detail..."
6. "Now 10 years. What have you missed? What opportunities closed? Who gave up on you?"
7. "End of life. You lived the safe version. What was the cost?"
8. "Who in your life is already living this future? How do you feel thinking about becoming them?"
9. "What identity would you have to give up to change? ('I am the type of person who...')"
10. "What is the most embarrassing reason you haven't changed?"

Then Vision prompts:
11. "Forget practicality. What does your ideal Tuesday look like in 3 years?"
12. "What would you have to believe about yourself for that life to feel natural?"
13. "What is one thing you would do this week if you were already that person?"

After completion:
> "The Nigredo is complete. You have gazed into the Kenoma and seen its emptiness. Carry this awareness through the day. The Albedo — the whitening — comes through the interrupts that follow."

**Phase 2: Day — Albedo (Pattern Interrupts)**

Setup screen that schedules notifications/reminders:
> "Throughout today, you will receive interrupts — moments of Uranian lightning designed to break the Archons' grip. These questions pull you out of autopilot."

User sets times or accepts defaults. Questions appear as cards:
- "What am I avoiding right now by doing what I'm doing?"
- "If someone filmed the last two hours, what would they conclude I want?"
- "Am I moving toward the life I hate or the life I want?"
- "What's the most important thing I'm pretending isn't important?"
- "What did I do today out of identity protection rather than genuine desire?"
- "When did I feel most alive today? Most dead?"
- "What would change if I stopped needing people to see me as [identity]?"
- "Where am I trading aliveness for safety?"

Each interrupt has a small text input for quick reflection.

**Phase 3: Dusk — Citrinitas & Rubedo (Evening Synthesis)**
*~20 min estimated*

Introduction:
> "The day's work is done. You have dissolved old patterns (Solve). Now we coagulate the new (Coagula). This is the yellowing — Citrinitas — where new consciousness dawns, leading to Rubedo — the reddening — full integration."

Synthesis prompts:
1. "After today, what feels most true about why you've been stuck?"
2. "What is the actual enemy? Name it clearly. Not circumstances. The internal pattern."
3. "Write one sentence capturing what you REFUSE to let your life become." (Anti-vision compressed)
4. "Write one sentence capturing what you're building toward." (Vision MVP)

Goal-setting (Lenses):
5. "1-Year Lens: What would have to be true in one year to know you've broken the old pattern?"
6. "1-Month Lens: What would have to be true in one month for the 1-year to remain possible?"
7. "Daily Lens: What are 2-3 actions the person you're becoming would simply do tomorrow?"

Final integration — populate the Game Board:
> "Your Great Work is now defined. These six components form your Athanor — the vessel of transformation."

User reviews and confirms their:
- Anti-vision (one sentence)
- Vision (one sentence)
- 1-year goal
- 1-month project
- Daily levers (2-3 items)
- Constraints (optional: what they won't sacrifice)

Completion message:
> "The Reset Day is complete. You have performed the Great Work in miniature. Now you live it. Return daily to tend the fire."

### 4. Daily Practice Mode

**Morning Practice (~5 min)**

Header shows:
- Current lunar phase
- Planetary day (Sunday=Sun, Monday=Moon, etc.)
- Alchemical stage

Displays:
- Vision statement (reminder)
- Today's daily levers as checkable items
- Optional: One prompt based on planetary day:
  - Sunday (☉): "How does today's work express who you're becoming?"
  - Monday (☽): "What emotional pattern might surface today? How will you meet it?"
  - Tuesday (♂): "What resistance will you cut through today?"
  - Wednesday (☿): "What do you need to understand more clearly?"
  - Thursday (♃): "How does today connect to your larger expansion?"
  - Friday (♀): "What do you genuinely desire today?"
  - Saturday (♄): "What constraint or commitment needs honoring?"

**Evening Reflection (~5 min)**

Simple prompts:
- "Did I move toward or away from the life I want today?"
- "What pattern did I notice?"
- "One thing I'm grateful for from the work today."

Option to check off completed daily levers.

### 5. Journal / History

- Chronological list of all journal entries
- Filterable by: Reset Day entries, Morning entries, Evening entries, Interrupts
- Each entry shows date, lunar phase at time, and content

### 6. Settings

- Edit birth date (for sun sign)
- Edit Game Board components directly
- Toggle esoteric language on/off (for users who want a more "secular" experience)
- Dark/light mode (default: dark, alchemical aesthetic)
- Clear all data / Start fresh

---

## Design System

### Aesthetic

**Overall Vibe:** Dark, mystical, but clean and modern. Think: a beautiful grimoire meets a premium productivity app. Not cluttered or "witchy cliché" — refined and atmospheric.

**Color Palette:**
```css
--bg-primary: #0a0a0f;        /* Deep night */
--bg-secondary: #12121a;      /* Slightly lifted */
--bg-card: #1a1a24;           /* Card surfaces */
--text-primary: #e8e6e3;      /* Warm off-white */
--text-secondary: #9a9a9a;    /* Muted */
--accent-gold: #c9a227;       /* Alchemical gold — primary accent */
--accent-silver: #a8a8b8;     /* Albedo silver */
--accent-red: #8b2942;        /* Rubedo red */
--accent-black: #2a2a35;      /* Nigredo */
--border: #2a2a35;
```

**Typography:**
- Headings: Serif font (e.g., "Cormorant Garamond" from Google Fonts)
- Body: Clean sans-serif (e.g., "Inter" or system fonts)
- Symbols/accents: Consider using unicode symbols for planets (☉☽♂♃♄ etc.)

**Visual Elements:**
- Subtle gradients and glows, especially gold
- Thin borders, generous spacing
- Cards with subtle shadows
- Alchemical/geometric symbols as decorative elements (subtle, not overwhelming)
- Tree-like structure for the Game Board visualization

### Component Styles

**Cards:**
```css
.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 24px;
}
```

**Buttons:**
- Primary: Gold background, dark text
- Secondary: Transparent with gold border
- Ghost: Text only with hover state

**Inputs:**
- Dark background
- Subtle border
- Gold focus ring
- Generous padding for journaling textareas

**Progress/Stage Indicators:**
- Show alchemical stage with relevant color (black → white → yellow → red)
- Subtle animations on stage transitions

---

## Technical Requirements

### Single File Structure
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ekanta</title>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    /* All CSS here */
  </style>
</head>
<body>
  <!-- All HTML here -->
  <script>
    // All JS here
  </script>
</body>
</html>
```

### Data Persistence

Use `localStorage` to persist:
- User's birth date
- Game Board components (vision, anti-vision, goals, etc.)
- Journal entries (array of objects with date, type, content, lunar phase)
- Current alchemical stage
- Day streak
- Settings preferences

### Lunar Phase Calculation

Implement a simple lunar phase calculator based on current date. Doesn't need to be astronomically precise — approximate is fine. Return:
- Phase name (New Moon, Waxing Crescent, First Quarter, Waxing Gibbous, Full Moon, Waning Gibbous, Last Quarter, Waning Crescent)
- Phase emoji (🌑🌒🌓🌔🌕🌖🌗🌘)

### Sun Sign Calculation

From birth date, determine sun sign. Simple date range lookup.

### Planetary Day

Based on current day of week:
```js
const planetaryDays = {
  0: { planet: 'Sun', symbol: '☉', name: 'Sunday' },
  1: { planet: 'Moon', symbol: '☽', name: 'Monday' },
  2: { planet: 'Mars', symbol: '♂', name: 'Tuesday' },
  3: { planet: 'Mercury', symbol: '☿', name: 'Wednesday' },
  4: { planet: 'Jupiter', symbol: '♃', name: 'Thursday' },
  5: { planet: 'Venus', symbol: '♀', name: 'Friday' },
  6: { planet: 'Saturn', symbol: '♄', name: 'Saturday' }
};
```

### Alchemical Stage Progression

Simple progression based on engagement:
- **Nigredo**: Default starting stage, or when starting a new Reset Day
- **Albedo**: After completing a Reset Day's morning phase
- **Citrinitas**: After completing full Reset Day
- **Rubedo**: After 7+ days of consistent daily practice post-Reset Day

### Navigation

Use a simple SPA approach with JS:
- Hide/show different "screens" (divs)
- No routing library needed
- Smooth transitions between screens

---

## Screen-by-Screen Specifications

### Screen: Welcome
- Logo/title "Ekanta"
- Tagline: "Absolutely One — A Transformation Journal"
- Decorative alchemical symbol (simple geometric, maybe ouroboros-inspired)
- "Begin" button
- If returning user (has localStorage data), show "Continue Your Work" instead

### Screen: Onboarding (first-time only)
- Brief 2-3 card explanation of the app
- Birth date input (optional, can skip)
- "Enter the Athanor" button

### Screen: Dashboard
- Header: Streak, lunar phase, alchemical stage badge
- Game Board visualization (tree structure as described)
- Three action buttons: "Morning Practice", "Evening Reflection", "Begin Reset Day"
- If Game Board is empty, prompt to start Reset Day

### Screen: Reset Day — Phase 1 (Nigredo)
- Progress indicator (Phase 1 of 3)
- Introduction text
- Sequential prompts with large textarea for each
- "Next" button to advance through prompts
- Esoteric framing text between sections

### Screen: Reset Day — Phase 2 (Albedo)
- Explanation of the day interrupts
- List of interrupt questions with time slots
- For demo/immediate use: show all questions as a checklist the user can go through
- Input field for quick reflection on each

### Screen: Reset Day — Phase 3 (Rubedo)
- Progress indicator (Phase 3 of 3)
- Synthesis prompts
- Goal-setting prompts
- Final: Form to confirm/edit the 6 Game Board components
- Completion celebration with atmospheric message

### Screen: Morning Practice
- Today's context (date, lunar phase, planetary day)
- Vision statement displayed
- Daily levers as checkbox list
- Planetary day prompt with small input
- "Complete Morning Practice" button

### Screen: Evening Reflection
- Three reflection prompts with inputs
- Daily lever completion status
- "Complete Evening Reflection" button
- Streak update

### Screen: Journal History
- Filterable list of entries
- Each entry shows: date, type badge, lunar phase, preview of content
- Click to expand full entry

### Screen: View/Edit Game Board Component
- Display current value
- Edit mode with textarea
- Save/cancel buttons
- Relevant esoteric framing (e.g., "Your Vision — Pleroma — The Fullness You Seek")

### Screen: Settings
- Birth date field
- Esoteric language toggle
- Theme toggle (if implementing light mode)
- "Edit Game Board" links
- "Clear All Data" with confirmation

---

## Sample Content & Copy

### Alchemical Stage Descriptions

**Nigredo:**
> "The Blackening. You are in the phase of dissolution — confronting shadow, breaking down the old self. This is necessary. Stay with it."

**Albedo:**
> "The Whitening. Clarity emerges from chaos. You are washing away impurities, seeing patterns for what they are. The dawn approaches."

**Citrinitas:**
> "The Yellowing. New consciousness crystallizes. The golden light of insight illuminates your path. Integration begins."

**Rubedo:**
> "The Reddening. The Great Work manifests. You are living as the transformed self. The Philosopher's Stone is not found — it is forged through practice."

### Lunar Phase Guidance

**New Moon (🌑):**
> "A time for seeding intentions. The darkness holds potential. What will you plant?"

**Full Moon (🌕):**
> "Illumination. What has been hidden comes to light. What do you now see clearly?"

### Empty State Messages

**No Vision Set:**
> "Your Vision awaits definition. Begin a Reset Day to discover what you're building toward."

**No Daily Levers:**
> "No quests defined. What would the person you're becoming do today?"

---

## Build Instructions

1. Create a single `index.html` file
2. Embed all CSS in a `<style>` tag in the head
3. Embed all JS in a `<script>` tag before closing body
4. Use only vanilla JS — no frameworks, no build tools
5. Make it fully responsive (mobile-first)
6. Ensure all data persists via localStorage
7. Create smooth, subtle transitions between screens
8. The app should be immediately usable and beautiful

---

## Priority Features (MVP)

If time-constrained, prioritize:

1. ✅ Dashboard with Game Board display
2. ✅ Full Reset Day protocol (all 3 phases)
3. ✅ Morning Practice
4. ✅ Evening Reflection
5. ✅ localStorage persistence
6. ✅ Lunar phase calculation
7. ✅ Alchemical stage progression
8. ✅ Beautiful dark theme with gold accents

Secondary:
- Journal history view
- Planetary day integration
- Settings screen
- Streak tracking

---

## Final Notes

The goal is an app that feels like a sacred tool — something the user wants to return to daily. The esoteric framing isn't decoration; it's meaning-making technology that transforms mundane journaling into a felt sense of participation in something ancient and significant.

Build it with care. This is an Athanor.

---

*"Solve et Coagula — Dissolve and Coagulate"*