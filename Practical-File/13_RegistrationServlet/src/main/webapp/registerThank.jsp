<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title>Success</title>

    <style>
        body {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #43e97b, #38f9d7);
            font-family: Arial, sans-serif;
        }

        .card {
            background: white;
            padding: 40px;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }

        .card h2 {
            color: #2ecc71;
            margin-bottom: 15px;
        }

        .card a {
            display: inline-block;
            margin-top: 15px;
            text-decoration: none;
            padding: 10px 20px;
            background: #4facfe;
            color: white;
            border-radius: 6px;
            transition: 0.3s;
        }

        .card a:hover {
            background: #00c6ff;
        }
    </style>

</head>

<body>

<div class="card">
    <h2>Registration Successful</h2>
    <p>Your account has been created.</p>
    <a href="index.html">Go Back</a>
</div>

</body>
</html>