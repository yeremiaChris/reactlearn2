import React from 'react';
import './App.css';
import Message from './components/Message'
import Counter from './components/Counter'
import Greet from './components/Greet'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent';
import LifeCycleA from './components/LifeCycleA'
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentCompo from './components/ParentCompo'

function App() {
  return (
    <div className="App">

      <ParentCompo />

      {/* <PureComp /> */}

      {/* <Table /> */}

      {/* <FragmentDemo /> */}


      {/* <LifeCycleA /> */}

      {/* <ClassClick />
      <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <FunctionClick /> */}
      {/* <Greet name="yere" heroName={"batman"}/> */}
      {/* <Greet name="britney" heroName={"wonder woman"}/> */}
      {/* <Counter /> */}
      {/* <Message /> */}
    </div>
  );
}

export default App;
