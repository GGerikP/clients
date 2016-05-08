--
-- Table structure for table `statements`
--

CREATE TABLE IF NOT EXISTS `statements` (
	`statement_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
	`statement` varchar(255) NOT NULL,
	`evidential_rank` int(11) DEFAULT 0,
	`importance_rank` int(11) DEFAULT 0,
	`statement_type_id` bigint(20) unsigned not null,
	`statement_support_id` bigint(20) unsigned,
	PRIMARY KEY (`statement_id`),
	UNIQUE KEY `statement_id` (`statement_id`),
	UNIQUE KEY `statement_support_id` (`statement_support_id`),
	KEY `statement_type_id_fk` (`statement_type_id`),
	CONSTRAINT `statement_type_id_fk` FOREIGN KEY (`statement_type_id`) REFERENCES `statementtypes` (`statement_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
