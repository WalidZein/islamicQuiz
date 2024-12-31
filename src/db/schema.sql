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
    invite_count INTEGER DEFAULT 0,
    invite_code TEXT UNIQUE -- Adding invite code field
);

-- Add invite_code column if it doesn't exist
SELECT CASE 
    WHEN NOT EXISTS(
        SELECT 1 FROM pragma_table_info('users') WHERE name='invite_code'
    )
    THEN 'ALTER TABLE users ADD COLUMN invite_code TEXT UNIQUE'
END AS sql_command
WHERE sql_command IS NOT NULL;

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

-- Friendships table
CREATE TABLE IF NOT EXISTS friendships (
    friendship_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id_1 TEXT NOT NULL,
    user_id_2 TEXT NOT NULL,
    created_at TEXT NOT NULL,
    FOREIGN KEY (user_id_1) REFERENCES users(user_id),
    FOREIGN KEY (user_id_2) REFERENCES users(user_id),
    UNIQUE(user_id_1, user_id_2)
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_quiz_submissions_user_id ON quiz_submissions(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_submissions_date ON quiz_submissions(submission_date);
CREATE INDEX IF NOT EXISTS idx_friendships_user_1 ON friendships(user_id_1);
CREATE INDEX IF NOT EXISTS idx_friendships_user_2 ON friendships(user_id_2);
CREATE INDEX IF NOT EXISTS idx_users_invite_code ON users(invite_code); 