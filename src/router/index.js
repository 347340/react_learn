import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Hi from '../pages/Hi';
import Car from '../pages/Car';
import Garage from '../pages/Garage';
import Map from '../pages/Map';
import Greeting from '../pages/Greeting';
import LoginControl from '../pages/LoginControl';
import PackingList from '../pages/PackingList';
import PackingListIf from '../pages/PackingListIf';
import PackingListNull from '../pages/PackingListNull';
import PackingListTernary from '../pages/PackingListTernary';
import PackingListLogical from '../pages/PackingListLogical';
import ExampleOnchangeInput from '../pages/ExampleOnchangeInput';
import ExampleOnchangeSelect from '../pages/ExampleOnchangeSelect';
import QuestionSet from '../pages/QuestionSet';
import FruitPicker from '../pages/select';
import Form from '../pages/selectLabel';
import FruitPickerDefault from '../pages/selectDefaultValue';
import FruitPickerMultiple from '../pages/selectMultiple';
import EditPost from '../pages/editPost';
import SelectState from '../pages/selectState';
import SelectFruitState from '../pages/selectFruitState';
import FormComponent from '../pages/FormComponent';

const routes = [
  {
    path: '/hi',
    element: <Hi />
  },
  {
    path: '/car',
    element: <Car />
  },
  {
    path: '/garage',
    element: <Garage />
  },
  {
    path: '/map',
    element: <Map />
  },
  {
    path: '/greeting',
    element: <Greeting />
  },
  {
    path: '/login_control',
    element: <LoginControl />
  },
  {
    path: '/packing_list',
    element: <PackingList />
  },
  {
    path: '/packing_list_if',
    element: <PackingListIf />
  },
  {
    path: '/packing_list_null',
    element: <PackingListNull />
  },
  {
    path: '/packing_list_ternary',
    element: <PackingListTernary />
  },
  {
    path: '/packing_list_logical',
    element: <PackingListLogical />
  },
  {
    path: '/example_onchange_input',
    element: <ExampleOnchangeInput />
  },
  {
    path: '/example_onchange_select',
    element: <ExampleOnchangeSelect />
  },
  {
    path: '/question_set',
    element: <QuestionSet />
  },
  {
    path: '/select',
    element: <FruitPicker />
  },
  {
    path: '/select_label',
    element: <Form />
  },
  {
    path: '/select_default_value',
    element: <FruitPickerDefault />
  },
  {
    path: '/select_multiple',
    element: <FruitPickerMultiple />
  },
  {
    path: '/edit_post',
    element: <EditPost />
  },
  {
    path: '/select_state',
    element: <SelectState />
  },
  {
    path: '/select_fruit_state',
    element: <SelectFruitState />
  },
  {
    path: '/form_component',
    element: <FormComponent />
  }
];

function AppRoute() {
  return (
    <Router>
      <div>
        <Link to='/hi'>Hi</Link><br/>
        <Link to='/car'>Car</Link><br/>
        <Link to='/garage'>Garage</Link><br/>
        <Link to='/map'>Map</Link><br/>
        <Link to='/greeting'>Greeting</Link><br/>
        <Link to='/login_control'>LoginControl</Link><br/>
        <Link to='/packing_list'>PackingList</Link><br/>
        <Link to='/packing_list_if'>PackingListIf</Link><br/>
        <Link to='/packing_list_null'>PackingListNull</Link><br/>
        <Link to='/packing_list_ternary'>PackingListTernary</Link><br/>
        <Link to='/packing_list_logical'>PackingListLogical</Link><br/>
        <Link to='/example_onchange_input'>ExampleOnchangeInput</Link><br/>
        <Link to='/example_onchange_select'>ExampleOnchangeSelect</Link><br/>
        <Link to='/question_set'>QuestionSet</Link><br/>
        <Link to='/select'>FruitPicker</Link><br/>
        <Link to='/select_label'>Form</Link><br/>
        <Link to='/select_default_value'>FruitPickerDefault</Link><br/>
        <Link to='/select_multiple'>FruitPickerMultiple</Link><br/>
        <Link to='/edit_post'>EditPost</Link><br/>
        <Link to='/select_state'>SelectState</Link><br/>
        <Link to='/select_fruit_state'>SelectFruitState</Link><br/>
        <Link to='/form_component'>FormComponent</Link><br/>
      </div>
      <Routes>
      {
        routes.map(function(route, i) {
          return (
            <Route path={route.path} element={route.element} />
          )
        })
      }
      </Routes>
    </Router>
  );
};

export default AppRoute;
