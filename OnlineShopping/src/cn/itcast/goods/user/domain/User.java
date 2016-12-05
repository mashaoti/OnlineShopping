package cn.itcast.goods.user.domain;

/**
 * 用户模块实体类
 * @author qdmmy6
 *
 */
/*
 * 属性哪里来
 * 1. t_user表：因为我们需要把t_user表查询出的数据封装到User对象中
 * 2. 该模块所有表单：因为我们需要把表单数据封装到User对象中
 */
public class User {
	// 对应数据库表
	private String uid;//主键
	private String loginname;//登录名
	private String loginpass;//登录密码
	
	private String email;//邮箱
	private boolean status;//true表示邮箱已经激活 
	private String activationCode;//激活码,唯一指 每个用户的激活码不一样
	
	//注册表单
	private String verifyCode;//验证码
	private String reloginpass;//确认密码
	//修改密码表单
	private String newpass;//新密码
	/**
	 * @return the uid
	 */
	public String getUid() {
		return uid;
	}
	/**
	 * @param uid the uid to set
	 */
	public void setUid(String uid) {
		this.uid = uid;
	}
	/**
	 * @return the loginname
	 */
	public String getLoginname() {
		return loginname;
	}
	/**
	 * @param loginname the loginname to set
	 */
	public void setLoginname(String loginname) {
		this.loginname = loginname;
	}
	/**
	 * @return the loginpass
	 */
	public String getLoginpass() {
		return loginpass;
	}
	/**
	 * @param loginpass the loginpass to set
	 */
	public void setLoginpass(String loginpass) {
		this.loginpass = loginpass;
	}
	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}
	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}
	/**
	 * @return the status
	 */
	public boolean isStatus() {
		return status;
	}
	/**
	 * @param status the status to set
	 */
	public void setStatus(boolean status) {
		this.status = status;
	}
	/**
	 * @return the activationCode
	 */
	public String getActivationCode() {
		return activationCode;
	}
	/**
	 * @param activationCode the activationCode to set
	 */
	public void setActivationCode(String activationCode) {
		this.activationCode = activationCode;
	}
	/**
	 * @return the verifyCode
	 */
	public String getVerifyCode() {
		return verifyCode;
	}
	/**
	 * @param verifyCode the verifyCode to set
	 */
	public void setVerifyCode(String verifyCode) {
		this.verifyCode = verifyCode;
	}
	/**
	 * @return the reloginpass
	 */
	public String getReloginpass() {
		return reloginpass;
	}
	/**
	 * @param reloginpass the reloginpass to set
	 */
	public void setReloginpass(String reloginpass) {
		this.reloginpass = reloginpass;
	}
	/**
	 * @return the newpass
	 */
	public String getNewpass() {
		return newpass;
	}
	/**
	 * @param newpass the newpass to set
	 */
	public void setNewpass(String newpass) {
		this.newpass = newpass;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "User [uid=" + uid + ", loginname=" + loginname + ", loginpass="
				+ loginpass + ", email=" + email + ", status=" + status
				+ ", activationCode=" + activationCode + ", verifyCode="
				+ verifyCode + ", reloginpass=" + reloginpass + ", newpass="
				+ newpass + "]";
	}
	
}
