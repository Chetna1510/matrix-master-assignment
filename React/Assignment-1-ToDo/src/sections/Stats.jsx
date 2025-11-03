import React from 'react'

export default function Stats() {
  return (
    <div>
        <div className="row mb-4">
            <div className="col-4">
                <div className="card text-center">
                    <div className="card-body">
                        <h3 id="total">0</h3>
                        <small>Total</small>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card text-center">
                    <div className="card-body">
                        <h3 id="active">0</h3>
                        <small>Active</small>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card text-center">
                    <div className="card-body">
                        <h3 id="done">0</h3>
                        <small>Done</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
