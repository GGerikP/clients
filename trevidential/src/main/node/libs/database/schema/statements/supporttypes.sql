--
-- Table structure for table `statementsupportmap`
--

CREATE TABLE IF NOT EXISTS `supporttypes` (
	`support_type_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
	`support_type` varchar(32) NOT NULL,
	PRIMARY KEY (`support_type_id`),
	UNIQUE KEY `support_type_id` (`support_type_id`),
	UNIQUE KEY `support_type` (`support_type`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

