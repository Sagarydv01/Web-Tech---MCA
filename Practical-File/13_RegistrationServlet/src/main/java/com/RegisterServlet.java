package com;

import jakarta.servlet.*;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;

@WebServlet("/register")
public class RegisterServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {

        String fname = req.getParameter("fullname");
        String uname = req.getParameter("username");
        String pass = req.getParameter("password");
        String email = req.getParameter("email");
        String phone = req.getParameter("phone");

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/webtech", "root", "admin");

            PreparedStatement ps = con.prepareStatement(
                    "INSERT INTO registerdata(fullname, username, password, email, phone) VALUES (?, ?, ?, ?, ?)");

            ps.setString(1, fname);
            ps.setString(2, uname);
            ps.setString(3, pass);
            ps.setString(4, email);
            ps.setString(5, phone);

            int rows = ps.executeUpdate();

            if (rows > 0) {
                resp.sendRedirect("registerThank.jsp");   // more reliable than forward
            } else {
                resp.getWriter().println("Insert failed");
            }

            con.close();

        } catch (Exception e) {
            e.printStackTrace();
            resp.getWriter().println("Error: " + e.getMessage());
        }
    }
}