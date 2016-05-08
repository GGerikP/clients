--
-- Table structure for table `statements`
--

CREATE TABLE IF NOT EXISTS `statementquantifiers` (
	`quantifier_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
	`quantifier` varchar(30) NOT NULL
	PRIMARY KEY (`quantifier_id`),
	UNIQUE KEY `quantifier_id` (`quantifier_id`),
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
