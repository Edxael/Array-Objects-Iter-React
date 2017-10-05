import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './comps/Profile.jsx';

const singers = [
  {id:1 , name: "Ayumi Hamasaki", group:"Solist" , country:"Japan" , pic:'https://github.com/Edxael/Singer-Profiles/blob/master/src/comps/img/ayu.jpg?raw=true' },
  {id:2 , name: "Bora Yoon", group:"Sistar" , country:"S. Korea" , pic:"https://github.com/Edxael/Singer-Profiles/blob/master/src/comps/img/bora.jpg?raw=true" },
  {id:3 , name: "Rose Park", group:"Black Pink" , country:"S. Korea" , pic:"https://github.com/Edxael/Singer-Profiles/blob/master/src/comps/img/rose.jpg?raw=true" },
  {id:4 , name: "Mad Clown", group:"Solist" , country:"S. Korea" , pic:"https://github.com/Edxael/Singer-Profiles/blob/master/src/comps/img/mad.jpg?raw=true" },
  {id:5 , name: "Hani Yeon", group:"Exid" , country:"S. Korea" , pic:"https://github.com/Edxael/Singer-Profiles/blob/master/src/comps/img/hani.jpg?raw=true" },
  {id:6 , name: "Taeyang", group:"Big Bang" , country:"S. Korea" , pic:"https://github.com/Edxael/Singer-Profiles/blob/master/src/comps/img/tae.jpg?raw=true" },
  {id:7 , name: "Hyolyn Kim", group:"Sistar" , country:"S. Korea" , pic:"https://github.com/Edxael/Singer-Profiles/blob/master/src/comps/img/hyo.jpg?raw=true" },
  {id:8 , name: "Haruka Kodoma", group:"HTK-48" , country:"Japan" , pic:"https://github.com/Edxael/Singer-Profiles/blob/master/src/comps/img/haru.jpg?raw=true" }
];

class GatherComp extends React.Component {
  render() {
    const gralst = { background: "rgb(93, 36, 150)", padding: "25px" }
    const titlst = { color: "white", textAlign: "center" }
    return(
      <div style={gralst}>
        <h1 style={titlst}>Singers</h1>

          <Profile data={singers} />

      </div>
    )
  }
}

ReactDOM.render(<GatherComp />, document.getElementById('root'));
