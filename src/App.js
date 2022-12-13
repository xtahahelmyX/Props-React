import "./App.css";
import { Profile } from "./Profile/Component/Profile";
import img from "./images/human.jpg";
function App() {
  let fullName = "Taha Helmy";
  let bio = "Technology";
  let profession = "Web Developer";
  const handleName = () => alert(`${fullName}`);
  return (
    <Profile
      fullName={fullName}
      bio={bio}
      profession={profession}
      handleName={handleName}>
      <img src={img} alt="ME" />
    </Profile>
  );
}

export default App;
