-- Users table
CREATE TABLE IF NOT EXISTS users (
    user_id TEXT PRIMARY KEY,
    user_name TEXT NOT NULL,
    total_score INTEGER DEFAULT 0,
    current_streak INTEGER DEFAULT 0,
    highest_streak INTEGER DEFAULT 0,
    opt_in BOOLEAN DEFAULT false,
    last_quiz_date TEXT,
    last_updated TEXT,
    share_clicks INTEGER DEFAULT 0,
    invite_count INTEGER DEFAULT 0
);

-- Quiz submissions table
CREATE TABLE IF NOT EXISTS quiz_submissions (
    submission_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT NOT NULL,
    quiz_id INTEGER NOT NULL,
    quiz_score INTEGER NOT NULL,
    selected_options TEXT, -- For single-select: single number, for multi-select: semicolon-separated list of numbers
    submission_date TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Connections game submissions table
CREATE TABLE IF NOT EXISTS connection_game_submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT NOT NULL,
    game_id TEXT NOT NULL,
    user_selections TEXT NOT NULL, -- JSON array of arrays
    submission_time TEXT NOT NULL,
    game_completed BOOLEAN NOT NULL,
    strikes INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_quiz_submissions_user_id ON quiz_submissions(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_submissions_date ON quiz_submissions(submission_date);
CREATE INDEX IF NOT EXISTS idx_connection_submissions_user_id ON connection_game_submissions(user_id);
CREATE INDEX IF NOT EXISTS idx_connection_submissions_game_id ON connection_game_submissions(game_id); 