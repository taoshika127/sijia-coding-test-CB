CREATE TABLE blog(
  id SERIAL PRIMARY KEY,
  blogname VARCHAR(100),
  body TEXT,
  created DATE NOT NULL,
  tags
);

CREATE TABLE tag(
  tagname VARCHAR(100) PRIMARY KEY
)