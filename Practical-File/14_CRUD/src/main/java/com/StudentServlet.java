package com;

import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.WebServlet;
import java.sql.*;

@WebServlet("/student")
public class StudentServlet extends HttpServlet {

    protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws IOException {

        String action = req.getParameter("action");

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/webtech","root","admin");

            if("insert".equals(action)){
                PreparedStatement ps = con.prepareStatement(
                        "INSERT INTO students(name,email,course) VALUES(?,?,?)");

                ps.setString(1, req.getParameter("name"));
                ps.setString(2, req.getParameter("email"));
                ps.setString(3, req.getParameter("course"));
                ps.executeUpdate();
            }

            else if("update".equals(action)){
                PreparedStatement ps = con.prepareStatement(
                        "UPDATE students SET name=? WHERE id=?");

                ps.setString(1, req.getParameter("name"));
                ps.setInt(2, Integer.parseInt(req.getParameter("id")));
                ps.executeUpdate();
            }

            else if("delete".equals(action)){
                PreparedStatement ps = con.prepareStatement(
                        "DELETE FROM students WHERE id=?");

                ps.setInt(1, Integer.parseInt(req.getParameter("id")));
                ps.executeUpdate();
            }

            con.close();
            res.sendRedirect("index.jsp");

        } catch(Exception e){
            res.getWriter().println(e);
        }
    }
}