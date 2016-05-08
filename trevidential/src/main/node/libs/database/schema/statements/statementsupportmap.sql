--
-- Table structure for table `statementsupportmap`
--

CREATE TABLE IF NOT EXISTS `statementsupportmap` (
	`statement_support_id` bigint(20) unsigned not null AUTO_INCREMENT,
	`child_statement_id` bigint(20) unsigned NOT NULL,
	`parent_statement_id` bigint(20) unsigned NOT NULL,
	`support_type_id` bigint(20) NOT NULL,
	PRIMARY KEY (`statement_support_id`),
	UNIQUE KEY `statement_support_id` (`statement_support_id`),
	CONSTRAINT `statementsupportmap_fk1` FOREIGN KEY (`child_statement_id`) REFERENCES `statements` (`statement_id`),
	CONSTRAINT `statementsupportmap_fk2` FOREIGN KEY (`parent_statement_id`) REFERENCES `statements` (`statement_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

