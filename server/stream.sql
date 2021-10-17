\echo 'Delete and recreate stream db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE stream;
CREATE DATABASE stream;
\connect stream

\i stream-schema.sql

\echo 'Delete and recreate jobly_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE stream_test;
CREATE DATABASE stream_test;
\connect stream_test

\i stream-schema.sql
