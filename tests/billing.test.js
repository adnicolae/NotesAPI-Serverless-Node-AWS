import { calculateCost } from '../libs/billing-lib';
import { IoT1ClickDevicesService } from 'aws-sdk';

describe('charging tiers correctly', () => {
  it('charges lowest tier correctly', () => {
    const storagePreference = 10;
    const cost = 5000;
    
    const expectedCost = calculateCost(storagePreference);
    expect(cost).toEqual(expectedCost);
  });

  it('charges middle tier correctly', () => {
    const storagePreference = 15;
    const cost = 4500;
    
    const expectedCost = calculateCost(storagePreference);
    expect(cost).toEqual(expectedCost);
  });

  it('charges highest tier correctly', () => {
    const storagePreference = 101;
    const cost = 10100;
    
    const expectedCost = calculateCost(storagePreference);
    expect(cost).toEqual(expectedCost);
  });
})