import React from 'react';
import { Link } from '../../server/routes';

const InsuranceType = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-6 col-sm-6 p-0'>
          <div className='my_img_nhantho my_img_nt'>
            <div className='my_nhantho_bg_tran'>
              <Link route='insurance-life'>
                <a href='/bao-hiem-nhan-tho'>
                  <h2 className='my_home_nhantho cursor-pointer'>BẢO HIỂM NHÂN THỌ</h2>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className='col-md-6 col-sm-6 p-0'>
          <div className='my_img_nhantho my_img_pnt'>
            <div className='my_nhantho_bg_tran'>
              <Link route='insurance-non-life'>
                <a href='/bao-hiem-phi-nhan-tho'>
                  <h2 className='my_home_nhantho cursor-pointer'>BẢO HIỂM PHI NHÂN THỌ</h2>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceType;
