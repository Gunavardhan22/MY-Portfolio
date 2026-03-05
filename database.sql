-- Database Schema for Gunavardhan's Projects
-- This file contains the SQL structure for the projects listed in the portfolio.

-- 1. Resume Analyzer Project
CREATE TABLE resumes (
    resume_id INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(100) NOT NULL,
    file_path TEXT NOT NULL,
    parsed_skills TEXT,
    ats_score DECIMAL(5,2),
    upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE job_descriptions (
    job_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(150),
    description TEXT,
    required_skills TEXT
);

-- 2. Multi-Channel Ad Budget & Bid Optimization
CREATE TABLE ad_campaigns (
    campaign_id INT PRIMARY KEY AUTO_INCREMENT,
    platform VARCHAR(50), -- e.g., Google, Facebook, LinkedIn
    budget DECIMAL(10,2),
    actual_spend DECIMAL(10,2),
    clicks INT,
    conversions INT,
    roi DECIMAL(5,2),
    last_optimized TIMESTAMP
);

-- 3. SmartRoad - Pothole Detection
CREATE TABLE detection_logs (
    log_id INT PRIMARY KEY AUTO_INCREMENT,
    latitude DECIMAL(10,8),
    longitude DECIMAL(11,8),
    severity_level VARCHAR(20), -- low, medium, high
    image_reference TEXT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User Profile (Contact Information)
CREATE TABLE contact_messages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    sender_name VARCHAR(100),
    sender_email VARCHAR(100),
    subject VARCHAR(200),
    message TEXT,
    received_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
