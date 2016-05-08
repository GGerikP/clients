--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `usersupportmap` (
	`user_support_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
	`user_id` bigint(20) unsigned NOT NULL,
	`statement_support_id` bigint(20) unsigned NOT NULL,
	PRIMARY KEY (`user_support_id`),
	UNIQUE KEY `user_support_id` (`user_support_id`),
	CONSTRAINT `usersupportmap_fk1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
	CONSTRAINT `usersupportmap_fk2` FOREIGN KEY (`statement_support_id`) REFERENCES `statements` (`statement_support_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO usersupportmap (user_id,statement_support_id) VALUES (1,1);

