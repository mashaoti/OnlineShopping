package cn.itcast.goods.user.web.servlet;

import java.io.IOException;
import java.net.URLEncoder;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import cn.itcast.commons.CommonUtils;
import cn.itcast.goods.user.domain.User;
import cn.itcast.goods.user.service.UserService;
import cn.itcast.goods.user.service.exception.UserException;
import cn.itcast.servlet.BaseServlet;

/**
 * 用户模块WEB层
 * @author qdmmy6
 *
 */
public class UserServlet extends BaseServlet {
	private UserService userService = new UserService();
	
	//校验用户名

	public String ajaxValidateLoginname(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException, SQLException {
		// TODO Auto-generated method stub
		String loginname=req.getParameter("loginname");//获取用户输入的用户名
		boolean b=userService.ajaxValidateloginname(loginname);
		resp.getWriter().print(b);//把userService.ajaxValidateloginname返回的值发到客户端
	
		
		return null;
	}
	
	//校验Email
	public String ajaxValidateEmail(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException, SQLException {
		// TODO Auto-generated method stub
		String email=req.getParameter("eamil");//获取用户输入的用户名
		boolean b=userService.ajaxValidateEmail(email);
		resp.getWriter().print(b);//把userService.ajaxValidateloginname返回的值发到客户端
		return null;
	}
	//校验验证码
	public String ajaxValidateVerifyCode(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		String verifyCode=req.getParameter("verifyCode");//获取用户输入的验证码
		String vCode=(String) req.getSession().getAttribute("vCode");//获取图片中的验证码
		boolean b=verifyCode.equalsIgnoreCase(vCode);//比较输入的验证码是否正确 忽略大小写
		return null;
	}
	
}
