import { createAction } from '@reduxjs/toolkit';

const changeProductCardState = createAction<{ currentStateCard: string }>('productCard/changeFilter');


export { changeProductCardState };
