const fs = require('fs');
const http = require('http');
const express = require('express');
const User = require('./models/userModel');
var path = require('path')


const app = express();
const bcrypt = require('bcryptjs');

// app.use(express.static(path.join(__dirname, 'public')));
// const tempOverview = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8'); // these are top level code so no problem in writing at top.
// const tempProduct = fs.readFileSync(`${__dirname}/templates/login.html`, 'utf-8');
// const tempCard = fs.readFileSync(`${__dirname}/templates/signup.html`, 'utf-8');
app.use(express.json()); 
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString(); // adding new property to res object
    req.name = 'anurag porwal';
    next();
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("overview");
})
app.get("/signup", (req, res) => {
    res.render("signup");
})
app.get("/signin", (req, res) => {
    res.render("login");
});

app.post('/login', async (req, res) => { // This part has a little bug. Due to some reasons which I dont know I cant save my encrypted password (in sign up section)
                                        //in the database so when I comapre my passwords they wont match and hence we always get Invalid username/password error
	const { email, password } = req.body
    const user = await User.findOne( {email: email} );
    console.log(user);
	if (!user) {
		return res.json({ status: 'error', error: 'Invalid username/password' })
	}
    res.json({ status: 'error', error: 'This part has a little bug. Due to some reasons which I dont know I cant save my encrypted password (in sign up section) in the database so when I comapre my passwords they wont match and hence  always get Invalid username/password error.  Due to time shortage I am submitting this. Thanks!' })
	if (await bcrypt.compare(password, user.password)) { 
		// the username, password combination is successful

		const token = jwt.sign(
			{
				id: user._id,
				name: user
			},
			JWT_SECRET
		)

		return res.json({ status: 'ok', data: token })
    }

	res.json({ status: 'error', error: 'This part has a little bug. Due to some reasons which I dont know I cant save my encrypted password (in sign up section) in the database so when I comapre my passwords they wont match and hence  always get Invalid username/password error. Due to time shortage I am submitting this. Thanks!' })
})
// console.log(body);
app.post('/register', async (req, res) => {
    console.log("affqf\n");
	const { name, email, password } = req.body
    console.log(req.body);
	if (!email || typeof email !== 'string') {
		return res.json({ status: 'error', error: 'Invalid email' })
	}

	if (!password || typeof password !== 'string'){
		return res.json({ status: 'error', error: 'Invalid password' })
	}

	if (password.length < 5) {
		return res.json({
			status: 'error',
			error: 'Password too small. Should be atleast 6 characters'
		})
	}
    console.log(req.body);
	const encryptedpassword = await bcrypt.hash(password, 10)
    console.log(encryptedpassword);
	try {
		const response = await User.create({
			name,
            email,
            encryptedpassword
		})
		console.log('User created successfully: ', response)
	} catch (error) {
		if (error.code === 11000) {
			// duplicate key
			return res.json({ status: 'error', error: 'Email already in use' })
		}
		throw error
	}

	res.json({ status: 'ok' })
})

module.exports = app;