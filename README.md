# Chinese Vocabulary Flash Cards

A simple browser-based HSK flashcard app built with React and Vite.

## 1. Clone the repository

```bash
git clone https://github.com/Leviathan121005/hsk-vocabulary-learning-flashcards.git
```

## 2. Install and run locally

```bash
npm install
npm run dev
```

Open the local URL shown in terminal (usually http://localhost:5173).

## 3. Build for production

```bash
npm run build
npm run preview
```

## 4. How to use the app

1. Choose an HSK vocabulary set.
2. Set your session size.
3. Press Start.
4. Use controls during study:
- Space: flip card
- Left / Right: previous / next card
- N / M: mark Not Mastered / Mastered
5. Press End Session when done.
6. Use Progress Backup to export / import your learning data.

## 5. Notes

1. This app is frontend-only.
2. Progress is stored in your browser localStorage.
3. No account login and no cloud sync by default.

## 6. Google Analytics (GA4)

1. Copy `.env.example` to `.env.local`.
2. Set your GA4 Measurement ID:

```bash
VITE_GA_MEASUREMENT_ID=G-ABC123XYZ9
```

3. Restart the dev server if it is already running.

This app sends:
- Page views for in-app screens (`dashboard`, `session`, `summary`, `vocabulary`, `backup`).
- `session_finished` events with total/reviewed/mastered/not mastered word counts.
- `progress_downloaded` and `progress_imported` events for backup actions.

If `VITE_GA_MEASUREMENT_ID` is empty, analytics is disabled automatically.
