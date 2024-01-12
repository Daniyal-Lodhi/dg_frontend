--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: data_governance; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA data_governance;


ALTER SCHEMA data_governance OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: business_domain_entities; Type: TABLE; Schema: data_governance; Owner: postgres
--

CREATE TABLE data_governance.business_domain_entities (
    id bigint NOT NULL,
    created_by character varying(255),
    created_on timestamp without time zone,
    flag character varying(255),
    updated_by character varying(255),
    updated_on timestamp without time zone,
    description character varying(255),
    name character varying(255),
    business_domain_id bigint
);


ALTER TABLE data_governance.business_domain_entities OWNER TO postgres;

--
-- Name: business_domain_entities_id_seq; Type: SEQUENCE; Schema: data_governance; Owner: postgres
--

CREATE SEQUENCE data_governance.business_domain_entities_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE data_governance.business_domain_entities_id_seq OWNER TO postgres;

--
-- Name: business_domain_entities_id_seq; Type: SEQUENCE OWNED BY; Schema: data_governance; Owner: postgres
--

ALTER SEQUENCE data_governance.business_domain_entities_id_seq OWNED BY data_governance.business_domain_entities.id;


--
-- Name: business_domains; Type: TABLE; Schema: data_governance; Owner: postgres
--

CREATE TABLE data_governance.business_domains (
    id bigint NOT NULL,
    created_by character varying(255),
    created_on timestamp without time zone,
    flag character varying(255),
    updated_by character varying(255),
    updated_on timestamp without time zone,
    description character varying(255),
    name character varying(255)
);


ALTER TABLE data_governance.business_domains OWNER TO postgres;

--
-- Name: business_domains_id_seq; Type: SEQUENCE; Schema: data_governance; Owner: postgres
--

CREATE SEQUENCE data_governance.business_domains_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE data_governance.business_domains_id_seq OWNER TO postgres;

--
-- Name: business_domains_id_seq; Type: SEQUENCE OWNED BY; Schema: data_governance; Owner: postgres
--

ALTER SEQUENCE data_governance.business_domains_id_seq OWNED BY data_governance.business_domains.id;


--
-- Name: column_business_domain_entity_map; Type: TABLE; Schema: data_governance; Owner: postgres
--

CREATE TABLE data_governance.column_business_domain_entity_map (
    id bigint NOT NULL,
    created_by character varying(255),
    created_on timestamp without time zone,
    flag character varying(255),
    updated_by character varying(255),
    updated_on timestamp without time zone,
    business_domain_entity_id bigint,
    db_metadata_column_id bigint
);


ALTER TABLE data_governance.column_business_domain_entity_map OWNER TO postgres;

--
-- Name: column_business_domain_entity_map_id_seq; Type: SEQUENCE; Schema: data_governance; Owner: postgres
--

CREATE SEQUENCE data_governance.column_business_domain_entity_map_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE data_governance.column_business_domain_entity_map_id_seq OWNER TO postgres;

--
-- Name: column_business_domain_entity_map_id_seq; Type: SEQUENCE OWNED BY; Schema: data_governance; Owner: postgres
--

ALTER SEQUENCE data_governance.column_business_domain_entity_map_id_seq OWNED BY data_governance.column_business_domain_entity_map.id;


--
-- Name: db_configs; Type: TABLE; Schema: data_governance; Owner: postgres
--

CREATE TABLE data_governance.db_configs (
    id bigint NOT NULL,
    created_by character varying(255),
    created_on timestamp without time zone,
    flag character varying(255),
    updated_by character varying(255),
    updated_on timestamp without time zone,
    catalog_name character varying(255),
    password character varying(255),
    schema_name character varying(255),
    status boolean,
    type character varying(255),
    url character varying(255),
    username character varying(255)
);


ALTER TABLE data_governance.db_configs OWNER TO postgres;

--
-- Name: db_configs_id_seq; Type: SEQUENCE; Schema: data_governance; Owner: postgres
--

CREATE SEQUENCE data_governance.db_configs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE data_governance.db_configs_id_seq OWNER TO postgres;

--
-- Name: db_configs_id_seq; Type: SEQUENCE OWNED BY; Schema: data_governance; Owner: postgres
--

ALTER SEQUENCE data_governance.db_configs_id_seq OWNED BY data_governance.db_configs.id;


--
-- Name: db_metadata_column_values; Type: TABLE; Schema: data_governance; Owner: postgres
--

CREATE TABLE data_governance.db_metadata_column_values (
    id bigint NOT NULL,
    created_by character varying(255),
    created_on timestamp without time zone,
    flag character varying(255),
    updated_by character varying(255),
    updated_on timestamp without time zone,
    description character varying(255),
    value_name character varying(255),
    db_metadata_column_id bigint
);


ALTER TABLE data_governance.db_metadata_column_values OWNER TO postgres;

--
-- Name: db_metadata_column_values_id_seq; Type: SEQUENCE; Schema: data_governance; Owner: postgres
--

CREATE SEQUENCE data_governance.db_metadata_column_values_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE data_governance.db_metadata_column_values_id_seq OWNER TO postgres;

--
-- Name: db_metadata_column_values_id_seq; Type: SEQUENCE OWNED BY; Schema: data_governance; Owner: postgres
--

ALTER SEQUENCE data_governance.db_metadata_column_values_id_seq OWNED BY data_governance.db_metadata_column_values.id;


--
-- Name: db_metadata_columns; Type: TABLE; Schema: data_governance; Owner: postgres
--

CREATE TABLE data_governance.db_metadata_columns (
    id bigint NOT NULL,
    created_by character varying(255),
    created_on timestamp without time zone,
    flag character varying(255),
    updated_by character varying(255),
    updated_on timestamp without time zone,
    column_name character varying(255),
    datatype character varying(255),
    is_deleted_from_sourcedb boolean,
    is_nullable character varying(255),
    maximum_character_length integer,
    ordinal_position integer,
    db_metadata_table_id bigint,
    reference_column bigint
);


ALTER TABLE data_governance.db_metadata_columns OWNER TO postgres;

--
-- Name: db_metadata_columns_id_seq; Type: SEQUENCE; Schema: data_governance; Owner: postgres
--

CREATE SEQUENCE data_governance.db_metadata_columns_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE data_governance.db_metadata_columns_id_seq OWNER TO postgres;

--
-- Name: db_metadata_columns_id_seq; Type: SEQUENCE OWNED BY; Schema: data_governance; Owner: postgres
--

ALTER SEQUENCE data_governance.db_metadata_columns_id_seq OWNED BY data_governance.db_metadata_columns.id;


--
-- Name: db_metadata_statistics; Type: TABLE; Schema: data_governance; Owner: postgres
--

CREATE TABLE data_governance.db_metadata_statistics (
    id bigint NOT NULL,
    created_by character varying(255),
    created_on timestamp without time zone,
    flag character varying(255),
    updated_by character varying(255),
    updated_on timestamp without time zone,
    live_rows integer NOT NULL,
    db_metadata_column_id bigint
);


ALTER TABLE data_governance.db_metadata_statistics OWNER TO postgres;

--
-- Name: db_metadata_statistics_id_seq; Type: SEQUENCE; Schema: data_governance; Owner: postgres
--

CREATE SEQUENCE data_governance.db_metadata_statistics_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE data_governance.db_metadata_statistics_id_seq OWNER TO postgres;

--
-- Name: db_metadata_statistics_id_seq; Type: SEQUENCE OWNED BY; Schema: data_governance; Owner: postgres
--

ALTER SEQUENCE data_governance.db_metadata_statistics_id_seq OWNED BY data_governance.db_metadata_statistics.id;


--
-- Name: db_metadata_tables; Type: TABLE; Schema: data_governance; Owner: postgres
--

CREATE TABLE data_governance.db_metadata_tables (
    id bigint NOT NULL,
    created_by character varying(255),
    created_on timestamp without time zone,
    flag character varying(255),
    updated_by character varying(255),
    updated_on timestamp without time zone,
    is_deleted_from_sourcedb boolean,
    object_id integer,
    schema_name character varying(255),
    table_catalog character varying(255),
    table_name character varying(255),
    table_type character varying(255),
    db_config_id bigint
);


ALTER TABLE data_governance.db_metadata_tables OWNER TO postgres;

--
-- Name: db_metadata_tables_id_seq; Type: SEQUENCE; Schema: data_governance; Owner: postgres
--

CREATE SEQUENCE data_governance.db_metadata_tables_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE data_governance.db_metadata_tables_id_seq OWNER TO postgres;

--
-- Name: db_metadata_tables_id_seq; Type: SEQUENCE OWNED BY; Schema: data_governance; Owner: postgres
--

ALTER SEQUENCE data_governance.db_metadata_tables_id_seq OWNED BY data_governance.db_metadata_tables.id;


--
-- Name: dbmetadata_column_alias; Type: TABLE; Schema: data_governance; Owner: postgres
--

CREATE TABLE data_governance.dbmetadata_column_alias (
    id bigint NOT NULL,
    created_by character varying(255),
    created_on timestamp without time zone,
    flag character varying(255),
    updated_by character varying(255),
    updated_on timestamp without time zone,
    alias_name character varying(255),
    db_metadata_column_id bigint
);


ALTER TABLE data_governance.dbmetadata_column_alias OWNER TO postgres;

--
-- Name: dbmetadata_column_alias_id_seq; Type: SEQUENCE; Schema: data_governance; Owner: postgres
--

CREATE SEQUENCE data_governance.dbmetadata_column_alias_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE data_governance.dbmetadata_column_alias_id_seq OWNER TO postgres;

--
-- Name: dbmetadata_column_alias_id_seq; Type: SEQUENCE OWNED BY; Schema: data_governance; Owner: postgres
--

ALTER SEQUENCE data_governance.dbmetadata_column_alias_id_seq OWNED BY data_governance.dbmetadata_column_alias.id;


--
-- Name: table_business_domain_entity_map; Type: TABLE; Schema: data_governance; Owner: postgres
--

CREATE TABLE data_governance.table_business_domain_entity_map (
    id bigint NOT NULL,
    created_by character varying(255),
    created_on timestamp without time zone,
    flag character varying(255),
    updated_by character varying(255),
    updated_on timestamp without time zone,
    business_domain_entity_id bigint,
    db_metadata_table_id bigint
);


ALTER TABLE data_governance.table_business_domain_entity_map OWNER TO postgres;

--
-- Name: table_business_domain_entity_map_id_seq; Type: SEQUENCE; Schema: data_governance; Owner: postgres
--

CREATE SEQUENCE data_governance.table_business_domain_entity_map_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE data_governance.table_business_domain_entity_map_id_seq OWNER TO postgres;

--
-- Name: table_business_domain_entity_map_id_seq; Type: SEQUENCE OWNED BY; Schema: data_governance; Owner: postgres
--

ALTER SEQUENCE data_governance.table_business_domain_entity_map_id_seq OWNED BY data_governance.table_business_domain_entity_map.id;


--
-- Name: business_domain_entities id; Type: DEFAULT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.business_domain_entities ALTER COLUMN id SET DEFAULT nextval('data_governance.business_domain_entities_id_seq'::regclass);


--
-- Name: business_domains id; Type: DEFAULT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.business_domains ALTER COLUMN id SET DEFAULT nextval('data_governance.business_domains_id_seq'::regclass);


--
-- Name: column_business_domain_entity_map id; Type: DEFAULT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.column_business_domain_entity_map ALTER COLUMN id SET DEFAULT nextval('data_governance.column_business_domain_entity_map_id_seq'::regclass);


--
-- Name: db_configs id; Type: DEFAULT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.db_configs ALTER COLUMN id SET DEFAULT nextval('data_governance.db_configs_id_seq'::regclass);


--
-- Name: db_metadata_column_values id; Type: DEFAULT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.db_metadata_column_values ALTER COLUMN id SET DEFAULT nextval('data_governance.db_metadata_column_values_id_seq'::regclass);


--
-- Name: db_metadata_columns id; Type: DEFAULT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.db_metadata_columns ALTER COLUMN id SET DEFAULT nextval('data_governance.db_metadata_columns_id_seq'::regclass);


--
-- Name: db_metadata_statistics id; Type: DEFAULT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.db_metadata_statistics ALTER COLUMN id SET DEFAULT nextval('data_governance.db_metadata_statistics_id_seq'::regclass);


--
-- Name: db_metadata_tables id; Type: DEFAULT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.db_metadata_tables ALTER COLUMN id SET DEFAULT nextval('data_governance.db_metadata_tables_id_seq'::regclass);


--
-- Name: dbmetadata_column_alias id; Type: DEFAULT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.dbmetadata_column_alias ALTER COLUMN id SET DEFAULT nextval('data_governance.dbmetadata_column_alias_id_seq'::regclass);


--
-- Name: table_business_domain_entity_map id; Type: DEFAULT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.table_business_domain_entity_map ALTER COLUMN id SET DEFAULT nextval('data_governance.table_business_domain_entity_map_id_seq'::regclass);


--
-- Data for Name: business_domain_entities; Type: TABLE DATA; Schema: data_governance; Owner: postgres
--

COPY data_governance.business_domain_entities (id, created_by, created_on, flag, updated_by, updated_on, description, name, business_domain_id) FROM stdin;
\.


--
-- Data for Name: business_domains; Type: TABLE DATA; Schema: data_governance; Owner: postgres
--

COPY data_governance.business_domains (id, created_by, created_on, flag, updated_by, updated_on, description, name) FROM stdin;
\.


--
-- Data for Name: column_business_domain_entity_map; Type: TABLE DATA; Schema: data_governance; Owner: postgres
--

COPY data_governance.column_business_domain_entity_map (id, created_by, created_on, flag, updated_by, updated_on, business_domain_entity_id, db_metadata_column_id) FROM stdin;
\.


--
-- Data for Name: db_configs; Type: TABLE DATA; Schema: data_governance; Owner: postgres
--

COPY data_governance.db_configs (id, created_by, created_on, flag, updated_by, updated_on, catalog_name, password, schema_name, status, type, url, username) FROM stdin;
1	Abdullah	2023-12-26 16:34:37.730303	ACTIVE	\N	2023-12-26 16:38:09.674	WorkSpace1	1234	test_database	t	sqlserver	jdbc:sqlserver://DESKTOP-84SM924\\sqlexpress;encrypt=false	abdullah123
\.


--
-- Data for Name: db_metadata_column_values; Type: TABLE DATA; Schema: data_governance; Owner: postgres
--

COPY data_governance.db_metadata_column_values (id, created_by, created_on, flag, updated_by, updated_on, description, value_name, db_metadata_column_id) FROM stdin;
\.


--
-- Data for Name: db_metadata_columns; Type: TABLE DATA; Schema: data_governance; Owner: postgres
--

COPY data_governance.db_metadata_columns (id, created_by, created_on, flag, updated_by, updated_on, column_name, datatype, is_deleted_from_sourcedb, is_nullable, maximum_character_length, ordinal_position, db_metadata_table_id, reference_column) FROM stdin;
2	\N	2023-12-26 16:38:09.611	ACTIVE	\N	2023-12-26 16:38:09.611	ClaimName	varchar	\N	YES	50	2	1	\N
3	\N	2023-12-26 16:38:09.615	ACTIVE	\N	2023-12-26 16:38:09.615	CIF	int	\N	NO	10	1	2	\N
4	\N	2023-12-26 16:38:09.617	ACTIVE	\N	2023-12-26 16:38:09.617	CustomerName	varchar	\N	YES	50	2	2	\N
5	\N	2023-12-26 16:38:09.621	ACTIVE	\N	2023-12-26 16:38:09.621	Cust_ID	int	\N	NO	10	1	3	3
6	\N	2023-12-26 16:38:09.624	ACTIVE	\N	2023-12-26 16:38:09.624	PolicyName	varchar	\N	YES	50	2	3	\N
1	\N	2023-12-26 16:38:09.605	ACTIVE	\N	2023-12-26 16:38:09.64	ClaimeeID	int	\N	NO	10	1	1	5
\.


--
-- Data for Name: db_metadata_statistics; Type: TABLE DATA; Schema: data_governance; Owner: postgres
--

COPY data_governance.db_metadata_statistics (id, created_by, created_on, flag, updated_by, updated_on, live_rows, db_metadata_column_id) FROM stdin;
\.


--
-- Data for Name: db_metadata_tables; Type: TABLE DATA; Schema: data_governance; Owner: postgres
--

COPY data_governance.db_metadata_tables (id, created_by, created_on, flag, updated_by, updated_on, is_deleted_from_sourcedb, object_id, schema_name, table_catalog, table_name, table_type, db_config_id) FROM stdin;
1	\N	2023-12-26 16:38:09.554	ACTIVE	\N	2023-12-26 16:38:09.554	\N	965578478	test_database	WorkSpace1	Claim	TABLE	1
2	\N	2023-12-26 16:38:09.614	ACTIVE	\N	2023-12-26 16:38:09.614	\N	901578250	test_database	WorkSpace1	Customer	TABLE	1
3	\N	2023-12-26 16:38:09.619	ACTIVE	\N	2023-12-26 16:38:09.619	\N	933578364	test_database	WorkSpace1	Policy	TABLE	1
\.


--
-- Data for Name: dbmetadata_column_alias; Type: TABLE DATA; Schema: data_governance; Owner: postgres
--

COPY data_governance.dbmetadata_column_alias (id, created_by, created_on, flag, updated_by, updated_on, alias_name, db_metadata_column_id) FROM stdin;
\.


--
-- Data for Name: table_business_domain_entity_map; Type: TABLE DATA; Schema: data_governance; Owner: postgres
--

COPY data_governance.table_business_domain_entity_map (id, created_by, created_on, flag, updated_by, updated_on, business_domain_entity_id, db_metadata_table_id) FROM stdin;
\.


--
-- Name: business_domain_entities_id_seq; Type: SEQUENCE SET; Schema: data_governance; Owner: postgres
--

SELECT pg_catalog.setval('data_governance.business_domain_entities_id_seq', 1, false);


--
-- Name: business_domains_id_seq; Type: SEQUENCE SET; Schema: data_governance; Owner: postgres
--

SELECT pg_catalog.setval('data_governance.business_domains_id_seq', 1, false);


--
-- Name: column_business_domain_entity_map_id_seq; Type: SEQUENCE SET; Schema: data_governance; Owner: postgres
--

SELECT pg_catalog.setval('data_governance.column_business_domain_entity_map_id_seq', 1, false);


--
-- Name: db_configs_id_seq; Type: SEQUENCE SET; Schema: data_governance; Owner: postgres
--

SELECT pg_catalog.setval('data_governance.db_configs_id_seq', 1, false);


--
-- Name: db_metadata_column_values_id_seq; Type: SEQUENCE SET; Schema: data_governance; Owner: postgres
--

SELECT pg_catalog.setval('data_governance.db_metadata_column_values_id_seq', 1, false);


--
-- Name: db_metadata_columns_id_seq; Type: SEQUENCE SET; Schema: data_governance; Owner: postgres
--

SELECT pg_catalog.setval('data_governance.db_metadata_columns_id_seq', 6, true);


--
-- Name: db_metadata_statistics_id_seq; Type: SEQUENCE SET; Schema: data_governance; Owner: postgres
--

SELECT pg_catalog.setval('data_governance.db_metadata_statistics_id_seq', 1, false);


--
-- Name: db_metadata_tables_id_seq; Type: SEQUENCE SET; Schema: data_governance; Owner: postgres
--

SELECT pg_catalog.setval('data_governance.db_metadata_tables_id_seq', 3, true);


--
-- Name: dbmetadata_column_alias_id_seq; Type: SEQUENCE SET; Schema: data_governance; Owner: postgres
--

SELECT pg_catalog.setval('data_governance.dbmetadata_column_alias_id_seq', 1, false);


--
-- Name: table_business_domain_entity_map_id_seq; Type: SEQUENCE SET; Schema: data_governance; Owner: postgres
--

SELECT pg_catalog.setval('data_governance.table_business_domain_entity_map_id_seq', 1, false);


--
-- Name: business_domain_entities business_domain_entities_pkey; Type: CONSTRAINT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.business_domain_entities
    ADD CONSTRAINT business_domain_entities_pkey PRIMARY KEY (id);


--
-- Name: business_domains business_domains_pkey; Type: CONSTRAINT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.business_domains
    ADD CONSTRAINT business_domains_pkey PRIMARY KEY (id);


--
-- Name: column_business_domain_entity_map column_business_domain_entity_map_pkey; Type: CONSTRAINT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.column_business_domain_entity_map
    ADD CONSTRAINT column_business_domain_entity_map_pkey PRIMARY KEY (id);


--
-- Name: db_configs db_configs_pkey; Type: CONSTRAINT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.db_configs
    ADD CONSTRAINT db_configs_pkey PRIMARY KEY (id);


--
-- Name: db_metadata_column_values db_metadata_column_values_pkey; Type: CONSTRAINT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.db_metadata_column_values
    ADD CONSTRAINT db_metadata_column_values_pkey PRIMARY KEY (id);


--
-- Name: db_metadata_columns db_metadata_columns_pkey; Type: CONSTRAINT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.db_metadata_columns
    ADD CONSTRAINT db_metadata_columns_pkey PRIMARY KEY (id);


--
-- Name: db_metadata_statistics db_metadata_statistics_pkey; Type: CONSTRAINT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.db_metadata_statistics
    ADD CONSTRAINT db_metadata_statistics_pkey PRIMARY KEY (id);


--
-- Name: db_metadata_tables db_metadata_tables_pkey; Type: CONSTRAINT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.db_metadata_tables
    ADD CONSTRAINT db_metadata_tables_pkey PRIMARY KEY (id);


--
-- Name: dbmetadata_column_alias dbmetadata_column_alias_pkey; Type: CONSTRAINT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.dbmetadata_column_alias
    ADD CONSTRAINT dbmetadata_column_alias_pkey PRIMARY KEY (id);


--
-- Name: table_business_domain_entity_map table_business_domain_entity_map_pkey; Type: CONSTRAINT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.table_business_domain_entity_map
    ADD CONSTRAINT table_business_domain_entity_map_pkey PRIMARY KEY (id);


--
-- Name: table_business_domain_entity_map fk3809fsrhlgr7g18w49oor5hhd; Type: FK CONSTRAINT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.table_business_domain_entity_map
    ADD CONSTRAINT fk3809fsrhlgr7g18w49oor5hhd FOREIGN KEY (business_domain_entity_id) REFERENCES data_governance.business_domain_entities(id);


--
-- Name: business_domain_entities fk7tqtpptal5hgsutiwsfwwb3sm; Type: FK CONSTRAINT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.business_domain_entities
    ADD CONSTRAINT fk7tqtpptal5hgsutiwsfwwb3sm FOREIGN KEY (business_domain_id) REFERENCES data_governance.business_domains(id);


--
-- Name: column_business_domain_entity_map fk949ipr89febpfghqy845qp6y7; Type: FK CONSTRAINT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.column_business_domain_entity_map
    ADD CONSTRAINT fk949ipr89febpfghqy845qp6y7 FOREIGN KEY (id) REFERENCES data_governance.column_business_domain_entity_map(id);


--
-- Name: db_metadata_tables fk9pjd7rg5ppuklm77a3nihiga3; Type: FK CONSTRAINT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.db_metadata_tables
    ADD CONSTRAINT fk9pjd7rg5ppuklm77a3nihiga3 FOREIGN KEY (db_config_id) REFERENCES data_governance.db_configs(id);


--
-- Name: db_metadata_statistics fka7msrwwhwaegbi9x8c7alt1d; Type: FK CONSTRAINT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.db_metadata_statistics
    ADD CONSTRAINT fka7msrwwhwaegbi9x8c7alt1d FOREIGN KEY (db_metadata_column_id) REFERENCES data_governance.db_metadata_columns(id);


--
-- Name: column_business_domain_entity_map fkfvlvu2nur9tnau65hlh1hmmbn; Type: FK CONSTRAINT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.column_business_domain_entity_map
    ADD CONSTRAINT fkfvlvu2nur9tnau65hlh1hmmbn FOREIGN KEY (db_metadata_column_id) REFERENCES data_governance.db_metadata_columns(id);


--
-- Name: dbmetadata_column_alias fkghh1jrv0cj764co0vq3gmemem; Type: FK CONSTRAINT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.dbmetadata_column_alias
    ADD CONSTRAINT fkghh1jrv0cj764co0vq3gmemem FOREIGN KEY (db_metadata_column_id) REFERENCES data_governance.db_metadata_columns(id);


--
-- Name: table_business_domain_entity_map fkhufctpqbeurv8hcef2k08kcip; Type: FK CONSTRAINT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.table_business_domain_entity_map
    ADD CONSTRAINT fkhufctpqbeurv8hcef2k08kcip FOREIGN KEY (id) REFERENCES data_governance.table_business_domain_entity_map(id);


--
-- Name: db_metadata_column_values fkjwoou7mrmpwbkdfxo78snwnll; Type: FK CONSTRAINT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.db_metadata_column_values
    ADD CONSTRAINT fkjwoou7mrmpwbkdfxo78snwnll FOREIGN KEY (db_metadata_column_id) REFERENCES data_governance.db_metadata_columns(id);


--
-- Name: table_business_domain_entity_map fkmq6by1k7o94abvpbefwjaryea; Type: FK CONSTRAINT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.table_business_domain_entity_map
    ADD CONSTRAINT fkmq6by1k7o94abvpbefwjaryea FOREIGN KEY (db_metadata_table_id) REFERENCES data_governance.db_metadata_tables(id);


--
-- Name: column_business_domain_entity_map fkotff6pdjw3ppp8hy61etif4k3; Type: FK CONSTRAINT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.column_business_domain_entity_map
    ADD CONSTRAINT fkotff6pdjw3ppp8hy61etif4k3 FOREIGN KEY (business_domain_entity_id) REFERENCES data_governance.business_domain_entities(id);


--
-- Name: db_metadata_columns fkpnp1rq70pbyayvgy9rwh08xe1; Type: FK CONSTRAINT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.db_metadata_columns
    ADD CONSTRAINT fkpnp1rq70pbyayvgy9rwh08xe1 FOREIGN KEY (reference_column) REFERENCES data_governance.db_metadata_columns(id);


--
-- Name: db_metadata_columns fks9h1mca9dff6l60f1jc0ffsp5; Type: FK CONSTRAINT; Schema: data_governance; Owner: postgres
--

ALTER TABLE ONLY data_governance.db_metadata_columns
    ADD CONSTRAINT fks9h1mca9dff6l60f1jc0ffsp5 FOREIGN KEY (db_metadata_table_id) REFERENCES data_governance.db_metadata_tables(id);


--
-- PostgreSQL database dump complete
--

