import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class Certificates extends Component {
    render(){
        return(
            <Grid>
        <Cell col={4}>
          <div style={{display: 'flex'}}>
          {this.props.organization} 
          </div>
        </Cell>
        <Cell col={8}>
        <div style={{display: 'flex'}}>
        {this.props.courseDescription}
        </div>
        </Cell>
     </Grid>
        )
    }
}
export default Certificates;