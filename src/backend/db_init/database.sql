use sport_events;

CREATE TABLE `Event` (
  `id` char(36) PRIMARY KEY,
  `sport_id` int,
  `name` varchar(255) NOT NULL,
  `date` datetime NOT NULL
);

CREATE TABLE `Participant` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` char(60) NOT NULL,
  `neptun_code` char(6),
  `department_id` int,
  `city` varchar(255),
  `type` int
);

CREATE TABLE `ParticipantType` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255)
);

CREATE TABLE `Sport` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255)
);

CREATE TABLE `Event_Participant` (
  `event_id` char(36),
  `participant_id` int,
  PRIMARY KEY (`event_id`, `participant_id`)
);

CREATE TABLE `Department` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL
);

CREATE TABLE `Administrator` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` char(60) NOT NULL
);

ALTER TABLE `Participant` ADD FOREIGN KEY (`department_id`) REFERENCES `Department` (`id`);

ALTER TABLE `Participant` ADD FOREIGN KEY (`type`) REFERENCES `ParticipantType` (`id`);

ALTER TABLE `Event` ADD FOREIGN KEY (`sport_id`) REFERENCES `Sport` (`id`);

ALTER TABLE `Event_Participant` ADD FOREIGN KEY (`event_id`) REFERENCES `Event` (`id`);

ALTER TABLE `Event_Participant` ADD FOREIGN KEY (`participant_id`) REFERENCES `Participant` (`id`);

