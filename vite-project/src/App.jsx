import "./App.css";
import { useState } from "react";
import ShopifyLogo from "./assets/ShopifyLogo.png"
import homepage1 from "./assets/homepage1.png"
import beauty from "./assets/beauty.png"
import Coffee from "./assets/Coffee.png"
import FoodDrink from "./assets/FoodDrink.png"
import Jewelery from "./assets/Jewelery.png"
import homegarden from "./assets/homegarden.png"
import video1 from "./assets/video1.webm"
import phoneshoes from "./assets/phoneshoes.png"
import Dance from "./assets/Dance.gif"
import WD from "./assets/WD.png"
import SP from "./assets/SP.png";
import SSD from "./assets/SSD.png"
import TV from "./assets/TV.png"
import jewel1 from "./assets/jewel1.png"
import jewel2 from "./assets/jewel2.png"
import jewel3 from "./assets/jewel3.png"
import jewel4 from "./assets/jewel4.png"
import { HashRouter as Router, Routes, Route,Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import endpage from "./assets/endpage.png"

function App()
{
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [person,setPerson]=useState([]);
  function Add()
  {
    setPerson([...person,{email: email,password: password}])
  }
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login Add={Add} email={email} password={password} setEmail={setEmail} setPassword={setPassword}/>} />
        <Route path="/electronics" element={<EProducts />} />
        <Route path="/jewelry" element={<JProducts />} />
        <Route path="/description" element={<Description />} />
        <Route path="/user" element={<User/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

function Homepage()
{
  return (
  <>
    <div className="nav">
      <div className="leftnav">
        <img src={ShopifyLogo}></img>
           <h4>Start</h4>
           <h4>Sell</h4>
           <h4>Market</h4>
           <Link to="/user" style={{textDecoration: "none", color: "black"}}>
           <h4>Users^</h4>
           </Link>
      </div>
      <div className="rightnav">
          <h4>Pricing</h4>
          <h4>Learn</h4>
          <h4>Welcome</h4>
          <button>Start Free Trial</button>
      </div>
    </div>
    <section>
      <div className="homepage1">
        <div className="homepage1left">
          <h1>If you can dream it, you can sell it with Shopify</h1>
          <h3>Millions of the world's most successful brands trust Shopify to ship and process payments anywhere.</h3>
          <p></p>
        </div>
        <div className="homepage1right">
          <img src={homepage1}></img>
        </div>
      </div>
    </section>

    <section>
      <div className="homepage2">
        <h1 style={{fontSize: "40px"}}>Bring your business Online</h1>
        <h2 style={{position: "relative", left: "580px"}}>SEE OUR PRODUCTS</h2>   
        <div className="explore">
            <div className="exloreoptions">
              <Link to="/electronics">
              <img src={beauty}></img>
              </Link>
              <h3>ELECTRONICS</h3>
            </div>
           
            <div className="exloreoptions">
               <Link to="/jewelry">
              <img src={Jewelery}></img>
              </Link>
              <h3>JEWELERY</h3>
            </div>
            
            <div className="exloreoptions">
                <img src={Coffee}></img>
                <h3>FOOD & DRINK</h3>
            </div>
            <div className="exloreoptions">
                <img src={FoodDrink}></img>
                <h3>BEAUTY & COSMETICS</h3>
            </div>
            <div className="exloreoptions">
              <img src={homegarden}></img>
                <h3>HME & GARDEN</h3>
            </div>
        </div>  
      </div>
    </section>
    <section id="mainhomepage3">
      <h1 style={{fontSize: "40px"}}>With you whereever you go</h1>
      <h2 style={{color: "grey", width: "960px"}}>One platform with all the ecommerce and point of dsafe features you need to</h2>
      <h2 style={{color: "grey", width: "800px",position: "relative", bottom: "40px", left: "220px"}}>start, run, and grow your business.</h2>
      <div className="homepage3">
        <div className="homepage3left">
              <video height="500px" width="800px"  autoPlay muted playsInline>
              <source src={video1} type="video/mp4"></source>
            </video>
             <h1 style={{fontSize: "35px"}}>Market your business</h1>
             <h2 style={{width: "500px", fontWeight: "normal"}}>Take the guesswork out of marketing with built-in tools that help you create, execute, and analyze digital marketing campaigns..</h2>
             <h2 style={{color: "green", position: "relative",bottom: "4px"}}>Explore how to market our businessl--</h2>
      
        </div>
        <div className="homepage3right">
            <h1>Sell Everywhere</h1>
            <h2 style={{width: "500px"}}>Use one platform to sell products to anyone, anywhere—in person with Point of Sale and online through your website, social media, and online marketplaces.</h2>
            <h2 style={{color: "green", position: "relative",bottom: "40px"}}>Explore Ways to Sell--</h2>
            <img height="610px" width="735px" style={{position: "relative" ,top: "300px", right: "200px"}} src={phoneshoes}></img>

        </div>
      </div>
      
    </section>
    <section>
      <div className="homepage4">
        <div className="homepage4left">
          <img src={Dance}></img>
        </div>
        <div className="homepage4right">
           <h1 style={{position: "relative", top: "240px",left: "100px", fontSize: "30px"}}>Sopify Editions</h1>
            <h2 style={{width: "500px", position: "relative", top: "240px",left: "100px", fontWeight: "normal"}}>Use one platform to sell products to anyone, anywhere—in person with Point of Sale and online through your website, social media, and online marketplaces.</h2>
            <h2 style={{color: "green", position: "relative",bottom: "40px", position: "relative" ,top: "240px",left: "100px"}}>Explore Ways to Sell--</h2>
        </div>
      </div>
    </section>
    <section>
      <img style={{height: "731px", position: "relative",top: "350px"}} src={endpage} alt="" />
    </section>
  </>);
}

function Login({ email, password, setPassword, setEmail, Add, users }) {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 6;
  };

  const handleLogin = () => {
  if (!email || !password) {
    setError("Please fill in both fields.");
    return;
  }
  if (!isValidEmail(email)) {
    setError("Please enter a valid email.");
    return;
  }
  if (!isValidPassword(password)) {
    setError("Password must be at least 6 characters long.");
    return;
  }

  // ✅ Read users from localStorage instead of props
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

  const userExists = storedUsers.some(
    (user) => user.email === email && user.password === password
  );

  if (userExists) 
    {
    localStorage.setItem("isLoggedIn", "true");
    setError("");
    alert("Login Successful!");
    navigate("/"); // ✅ Redirect now works
  } else {
    setError("Invalid email or password.");
  }
};


 const handleCreateAccount = () => {
  if (!email || !password) {
    setError("Please fill in both fields.");
    return;
  }

  if (!isValidEmail(email)) {
    setError("Please enter a valid email address.");
    return;
  }

  if (!isValidPassword(password)) {
    setError("Password must be at least 6 characters long.");
    return;
  }

  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

  const existingUser = storedUsers.find((u) => u.email === email);
  if (existingUser) {
    setError("An account with this email already exists.");
    return;
  }

  const updatedUsers = [...storedUsers, { email, password }];
  localStorage.setItem("users", JSON.stringify(updatedUsers));
  alert("Account created successfully! You can now log in.");
  setError("");
};


  return (
    <div className="login">
      <div className="left">
        <div className="leftcontainer">
          <h1 style={{ fontSize: "50px" }}>Welcome Back to Shopify Login</h1>
          <p>It's great to have you back!</p>
          <h4>Email:</h4>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h4>Password:</h4>
          <input
            type="password"
            value={password}
            style={{ marginBottom: "50px" }}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="remember">
            <p>Remember</p>
            <p>Forget Password?</p>
          </div>
          <div className="loginbutton">
            <button
              style={{
                width: "260px",
                height: "37px",
                borderRadius: "10px",
                border: "none",
                boxShadow: "10px 10px 10px lightblack",
              }}
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              style={{
                width: "260px",
                borderRadius: "10px",
                border: "none",
                boxShadow: "10px 10px 10px lightblack",
              }}
              onClick={handleCreateAccount}
            >
              Create Account
            </button>
          </div>
          <div className="para" onClick={Add}>
            Or Login with
          </div>
          <div className="para">Facebook Google</div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}
function JProducts() {
  return (
    <>
      <div className="nav">
        <div className="leftnav">
          <img src={ShopifyLogo}></img>
          <h2 style={{ position: "relative", top: "22px", left: "110px" }}>Jewelery</h2>
        </div>
        <div className="rightnav">
          <h4>Pricing</h4>
          <h4>Learn</h4>
          <h4>Log in</h4>
          <button>Start free trial</button>
        </div>
      </div>
      <section>
        <div className="products">

          <Link to="/description" state={{ name: "Gold Plated Designer Necklace Set with Earrings", price: "₹999", image: jewel1, para: "Gold Plated Designer Necklace Set with Earrings. Elegant design and perfect for special occasions." }}>
            <div className="container">
              <img style={{ height: "300px" }} src={jewel1} />
              <div className="description">
                <h3 style={{ position: "relative", top: "30px" }}>Product Name:-</h3>
                <p style={{ position: "relative", top: "10px", left: "20px" }}>Gold Plated Designer Necklace Set with Earrings</p>
                <h3 style={{ fontWeight: "normal" }}><b>Price</b> <ub>₹999</ub></h3>
              </div>
            </div>
          </Link>

          <Link to="/description" state={{ name: "Elegant Kundan Bridal Choker Set", price: "₹1450", image: jewel2, para: "Elegant Kundan Bridal Choker Set. Traditional Indian design with high-quality craftsmanship." }}>
            <div className="container">
              <img style={{ height: "300px" }} src={jewel2} />
              <div className="description">
                <h3 style={{ position: "relative", top: "30px" }}>Product Name:-</h3>
                <p style={{ position: "relative", top: "10px", left: "20px" }}>Elegant Kundan Bridal Choker Set</p>
                <h3 style={{ fontWeight: "normal" }}><b>Price</b> <ub>₹1450</ub></h3>
              </div>
            </div>
          </Link>

          <Link to="/description" state={{ name: "Traditional Gold Bangles (Set of 2)", price: "₹540", image: jewel3, para: "Traditional Gold Bangles set, crafted with precision for timeless elegance." }}>
            <div className="container">
              <img style={{ height: "300px" }} src={jewel3} />
              <div className="description">
                <h3 style={{ position: "relative", top: "30px" }}>Product Name:-</h3>
                <p style={{ position: "relative", top: "10px", left: "20px" }}>Traditional Gold Bangles (Set of 2)</p>
                <h3 style={{ fontWeight: "normal" }}><b>Price</b> <ub>₹540</ub></h3>
              </div>
            </div>
          </Link>

          <Link to="/description" state={{ name: "Silver Oxidized Jhumka Earrings", price: "₹310", image: jewel4, para: "Silver Oxidized Jhumka Earrings, perfect for ethnic wear and daily use." }}>
            <div className="container">
              <img style={{ height: "300px" }} src={jewel4} />
              <div className="description">
                <h3 style={{ position: "relative", top: "30px" }}>Product Name:-</h3>
                <p style={{ position: "relative", top: "10px", left: "20px" }}>Silver Oxidized Jhumka Earrings</p>
                <h3 style={{ fontWeight: "normal" }}><b>Price</b> <ub>₹310</ub></h3>
              </div>
            </div>
          </Link>

        </div>
      </section>

    </>
  );
}

function EProducts() {
  return (
    <>
      <div className="nav">
        <div className="leftnav">
          <img src={ShopifyLogo} alt="Shopify Logo"></img>
          <h2 style={{ position: "relative", top: "22px", left: "110px" }}>
            Electronics
          </h2>
        </div>
        <div className="rightnav">
          <h4>Pricing</h4>
          <h4>Learn</h4>
          <h4>Log in</h4>
          <button>Start free trial</button>
        </div>
      </div>
      <section>
       
  <div className="products">

    <Link to="/description" state={{ name: "WD 2TB Elements Portable External Hard Drive - USB 3.0", price: "₹64", image: WD,  para: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system"}}>
      <div className="container">
        <img style={{ height: "300px" }} src={WD} />
        <div className="description">
          <h3 style={{ position: "relative", top: "30px" }}>Product Name:-</h3>
          <p style={{ position: "relative", top: "10px", left: "20px" }}>WD 2TB Elements Portable External Hard Drive - USB 3.0</p>
          <h3 style={{ fontWeight: "normal" }}><b>Price</b> <ub>₹64</ub></h3>
        </div>
      </div>
    </Link>

    <Link to="/description" state={{ name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s", price: "₹104", image: SSD, para: "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)"}}>
      <div className="container">
        <img style={{ height: "300px" }} src={SSD} />
        <div className="description">
          <h3 style={{ position: "relative", top: "30px" }}>Product Name:-</h3>
          <p style={{ position: "relative", top: "10px", left: "20px" }}>SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s</p>
          <h3 style={{ fontWeight: "normal" }}><b>Price</b> <ub>₹104</ub></h3>
        </div>
      </div>
    </Link>

    <Link to="/description" state={{ name: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5", price: "₹109", image: SP, para: "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability." }}>
      <div className="container">
        <img style={{ height: "300px" }} src={SP} />
        <div className="description">
          <h3 style={{ position: "relative", top: "30px" }}>Product Name:-</h3>
          <p style={{ position: "relative", top: "10px", left: "20px" }}>Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5</p>
          <h3 style={{ fontWeight: "normal" }}><b>Price</b> <ub>₹109</ub></h3>
        </div>
      </div>
    </Link>

    <Link to="/description" state={{ name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin", price: "₹694", image: TV, para: "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz" }}>
      <div className="container">
        <img style={{ height: "300px" }} src={TV} />
        <div className="description">
          <h3 style={{ position: "relative", top: "30px" }}>Product Name:-</h3>
          <p style={{ position: "relative", top: "10px", left: "20px" }}>Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin</p>
          <h3 style={{ fontWeight: "normal" }}><b>Price</b> <ub>₹694</ub></h3>
        </div>
      </div>
    </Link>
  </div>
</section>

    </>
  );
}


function Description() {
  const y = 4;
   const location = useLocation();
  const { name, price, image,para } = location.state || {};
  

  return (
    <>
      <div className="nav">
        <div className="leftnav">
          <img src={ShopifyLogo} />
          <h2 style={{ position: "relative", top: "22px", left: "110px" }}>
            Description
          </h2>
        </div>
        <div className="rightnav">
          <h4>Pricing</h4>
          <h4>Learn</h4>
          <h4>Log in</h4>
          <button>Start free trial</button>
        </div>
      </div>

      <div className="showing">
        <div className="product">
          <img style={{ height: "400px" }} src={image} />
          <p><b>Name:-</b>{name}</p>
          <p><b>Price:-</b>{price}</p>
          <p><b>Product Description</b>{para}</p>
        </div>
      </div>
    </>
  );
}

function User() {
 
 const user = [
    { name: "Saraswat Acharyya", email: "jaiswalacharyy37698@hotmail.com" ,sex: "Male"},
    { name: "Anika Sharma", email: "anika.sharma23@gmail.com", sex: "Female" },
  { name: "Rohan Mehta", email: "rohan.meh@gmail.com", sex: "Male" },
  { name: "Priya Desai", email: "priyadesai21@yahoo.com", sex: "Female" },
  { name: "Aarav Patel", email: "aarav.patel98@gmail.com", sex: "Male" },
  { name: "Isha Kapoor", email: "isha.kapoor@outlook.com", sex: "Female" },
  { name: "Karan Verma", email: "karanv99@hotmail.com", sex: "Male" },
  { name: "Neha Joshi", email: "neha.joshi@yahoo.in", sex: "Female" },
  { name: "Vikram Singh", email: "vikramsingh88@gmail.com", sex: "Male" },
  { name: "Sneha Iyer", email: "sneha.iyer@mail.com", sex: "Female" }
  ];
  return (
    <>
      <div className="nav">
        <div className="leftnav">
          <img src={ShopifyLogo} />
          <h2 style={{ position: "relative", top: "22px", left: "110px" }}>
            Users
          </h2>
        </div>
        <div className="rightnav">
          <h4>Pricing</h4>
          <h4>Learn</h4>
          <h4>Log in</h4>
          <button>Start free trial</button>
        </div>
      </div>

      <div className="users">
        <div className="infoname">
          <h2>Name:</h2>
          <h2>Email:</h2>
          <h2>Sex:-</h2>
        </div>
        {user.map((k, i) => (
          <div className="infoname" key={i}>
            <h3> {k.name}</h3>
            <h3> {k.email}</h3>
            <h3>{k.sex}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
