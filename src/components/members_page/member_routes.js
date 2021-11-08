import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Member from './member';
import Members from './members';

const MemberRoutes = () =>
(
  <Switch>
    <Route exact path='/members' component={Members}/>
    <Route path='/members/:id' component={Member}/>
  </Switch>
)

export default MemberRoutes;