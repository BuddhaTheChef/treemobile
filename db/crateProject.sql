INSERT INTO projects (projname,compfrom,numtree,location,price,email,uid) VALUES ($1,$2,$3,$4,$5,$6,$7);
SELECT * FROM posts
WHERE projname = (${projname});
