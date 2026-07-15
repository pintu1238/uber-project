import { createUserTable } from '../models/usertable.js'
import { createShippingInfoTable } from '../models/shippingInfoTable.js'
import { createProductsTable } from '../models/productTable.js'
import { createProductReviewsTable } from '../models/productReviewTable.js'
import { createPaymentsTable } from '../models/paymentTable.js'
import { createOrdersTable } from '../models/orderTable.js'
import { createOrderItemTable } from '../models/orderItemsTable.js'



export const createTables = async () => {
  try {
    await createUserTable();
    await createProductsTable();
    await createOrdersTable();
    await createOrderItemTable();
    await createProductReviewsTable();
    await createPaymentsTable();
    await createShippingInfoTable();

    console.log("All Tables Created Successfully.");
  } catch (error) {
    console.error("Error creating tables:", error);
  }
};