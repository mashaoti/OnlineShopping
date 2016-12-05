package cn.itcast.goods.user.service;

import java.io.IOException;
import java.sql.SQLException;
import java.text.MessageFormat;
import java.util.Properties;

import javax.mail.MessagingException;
import javax.mail.Session;

import cn.itcast.commons.CommonUtils;
import cn.itcast.goods.user.dao.UserDao;
import cn.itcast.goods.user.domain.User;
import cn.itcast.goods.user.service.exception.UserException;
import cn.itcast.mail.Mail;
import cn.itcast.mail.MailUtils;

/**
 * 用户模块业务层
 * @author qdmmy6
 *
 */
public class UserService {
	private UserDao userDao = new UserDao();
	/***
	 * 检验用户名是否被注册
	 * @throws SQLException 
	 
	 */
	public boolean ajaxValidateloginname(String loginname) throws SQLException {
		
		return userDao.ajaxValidateLoginname(loginname);
		
	}
	/*
	 * 检验email是否被注册
	 * */
	public boolean ajaxValidateEmail(String email) throws SQLException {
		
		return userDao.ajaxValidateEmail(email);
		
	}	
	
}
