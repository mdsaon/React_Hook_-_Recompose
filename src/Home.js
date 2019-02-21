import React from 'react';
import { withState } from 'recompose';

//function based example of using state
const Home = ({count,addCount}) => {
 return <div>
     <h1>Count: {count}</h1>
     <button onClick ={()=> addCount(count=>count+1)}>ADD</button>
 </div>
};
export default withState('count','addCount',1)(Home);
//class based example of using state
/*
class Home extends Component {
    state = {
        count : 0)
    }
    addCount = () =>{
        this.setState(prevState => ({
            count: this.state.count+1
      }));
    }
    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick = {this.addCount}>ADD</button>
            </div>
        )
    }
}
export default Home;
*/