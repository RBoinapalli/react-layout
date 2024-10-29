import Tree from "../components/Tree.js";
import "../css/Home.css";

const Home = () => {
    return (
        <div class= "trees">
        <Tree name ="Bald Cypress" image="images/baldCypress.jpg" />
        <Tree name="Eastren Redbud"image="redbud.jpg" />
        <Tree name= "Live Oak" image="images/oak.jpg"/>
        </div>
    );
    
};

export default Home;