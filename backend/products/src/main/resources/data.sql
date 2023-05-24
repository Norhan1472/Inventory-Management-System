INSERT INTO user (email,password,active) VALUES ('admin','$2a$10$gw4NnMpJb2rWaqwhN.10IePQqdKn40xDbO/CMUnetz36EmWhPvEpm',1);
INSERT INTO roles (role_name) VALUES('ROLE_user');
INSERT INTO roles (role_name) VALUES('ROLE_admin');
INSERT INTO user_role(user_id,role_id) VALUES(1,2);