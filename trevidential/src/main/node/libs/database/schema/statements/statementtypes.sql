--
-- Table structure for table `statementtypes`
--

CREATE TABLE IF NOT EXISTS `statementtypes` (
  `statement_type_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(32) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`statement_type_id`),
  UNIQUE KEY `statement_type_id` (`statement_type_id`),
  KEY `type_unq` (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
