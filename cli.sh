# https://www.sqlite.org/cli.html

sqlite3 ./test.db

sqlite> create table tbl1(name text, age int);
sqlite> insert into tbl1 values('Jim',10);
sqlite> insert into tbl1 values('Sun',12);
sqlite> select * from tbl1;

sqlite> .databases
sqlite> .tables
sqlite> .schema

sqlite> .mode column
sqlite> select * from tbl1;

sqlite> .mode markdown
sqlite> select * from tbl1;
