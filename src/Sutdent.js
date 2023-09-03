
import './App.css';
function Student(props) {
  console.log(props)
  return (
 <div style={{backgroundColor: "skblue", margin:10}}>
      <h1>Hello{props.name}</h1>
      <h2>Email:{props.email}</h2>
      <h1>address:{props.other.address}</h1>
    </div>
  );
}
export default Student;