package cn.itcast.goods.user.dao;

import java.sql.SQLException;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.ScalarHandler;

import cn.itcast.goods.user.domain.User;
import cn.itcast.jdbc.TxQueryRunner;

/**
 * 用户模块持久层
 * @author qdmmy6
 *
 */
public class UserDao {
	private QueryRunner qr = new TxQueryRunner();
	//校验用户名是否被注册
	public boolean ajaxValidateLoginname(String loginname) throws SQLException{
		String sql="select count(1) from t_user where loginname=?";
		Number number=(Number)qr.query(sql, new ScalarHandler(), loginname);
		
		return number.intValue()==0;//等于0表示该用户在数据库中还没有注册
	}
	//校验Email是否被注册
	public boolean ajaxValidateEmail(String email) throws SQLException{
		String sql="select count(1) from t_user where email=?";
		Number number=(Number)qr.query(sql, new ScalarHandler(), email);
		
		return number.intValue()==0;//等于0表示该用户在数据库中还没有注册
	}
}
