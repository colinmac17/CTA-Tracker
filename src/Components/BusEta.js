import React from 'react';

export default function BusEta() {
    return (
    
          <div>
          <form>
            <label>
              <h2>Bus Route Information:</h2>
              <select>
                <option value="0">-- Select a Bus Route --</option>
                <option value="358">1 Bronzeville/Union Station</option>
                <option value="159">2 Hyde Park Express</option>
                <option value="160">3 King Drive</option>
                <option value="162">4 Cottage Grove - OWL</option>
                <option value="164">N5 South Shore Night Bus - OWL</option>
                <option value="165">6 Jackson Park Express</option>
              </select>
            </label>
            <button type="submit">Submit</button>
          </form>

          <hr/>

        <h3> Currently Viewing: </h3>

          </div>
    
    
    
        )
}