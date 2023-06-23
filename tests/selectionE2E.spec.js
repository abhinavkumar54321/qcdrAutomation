// @ts-check
import { test, expect } from '@playwright/test';
const { chromium } = require('@playwright/test');
test("My first test",async () => {
  test.setTimeout(12000000);
  // Try to add 'playwright.firefox' to the list ↓
  //for (const browserType of [playwright.chromium, playwright.webkit]) {
    const browser = await chromium.launch({ headless: false, slowMo: 50 });
    const context = await browser.newContext({ ignoreHTTPSErrors: true });
    const page = await context.newPage();
    await page.goto('https://mdanalyticstst.mckesson.com');
    await page.getByRole('link', { name: 'here' }).click();
    // await page.getByRole('button', { name: 'Advanced' }).click();
    // await page.getByRole('link', { name: 'Proceed to mdanalyticstst.mckesson.com (unsafe)' }).click();
    // await page.getByPlaceholder('domain\\username').click();
    await page.getByPlaceholder('domain\\username').fill('namck\\e6uilzo');
    //await page.getByPlaceholder('domain\\username').press('Tab');
    await page.getByPlaceholder('Password').fill('e6ui*Mz3');
    await page.getByRole('button', { name: 'Sign in' }).click();
    // await page.locator('app-header').getByTestId('select').selectOption('DE257F644DF05280E139FDE891CC8148');
    await page.getByRole('button', { name: 'Products' }).click();
    await page.getByText('MIPS Data Submission', { exact: true }).click();
    await page.getByRole('button', { name: 'Data Submission' }).click();
    await page.getByRole('link', { name: 'Selections' }).click();
    //await page.getByRole('button', { name: 'Next Next' }).click();

  await page.getByRole('row', { name: 'Toggle Row Selected IA_PM_21 Population Management Advance Care Planning Medium 20 10' }).getByRole('checkbox', { name: 'Toggle Row Selected' }).uncheck();
  await page.getByRole('row', { name: 'Toggle Row Selected IA_PM_16 Population Management Implementation of medication management practice improvements Medium 20 10' }).getByRole('checkbox', { name: 'Toggle Row Selected' }).uncheck();
   await page.getByRole('row', { name: 'Toggle Row Selected IA_PM_21 Population Management Advance Care Planning Medium 20 10' }).getByRole('checkbox', { name: 'Toggle Row Selected' }).check();
   await page.getByRole('row', { name: 'Toggle Row Selected IA_PM_16 Population Management Implementation of medication management practice improvements Medium 20 10' }).getByRole('checkbox', { name: 'Toggle Row Selected' }).check();
   await page.getByRole('button', { name: 'Next Next' }).click();

  //await page.getByTestId('headerCheckbox' ).check();
  //await page.getByTitle('Toggle All Rows Selected').check();
  //await page.getByTestId('headerCheckbox' ).uncheck();
 await page.getByRole('row', { name: 'Toggle Row Selected 047 Advance Care Planning Process 42 50 84 5.9 Registry' }).getByRole('checkbox', { name: 'Toggle Row Selected' }).uncheck();
 //await page.getByRole('row', { name: 'Toggle Row Selected 104 Adjuvant Hormonal Therapy for High Risk or Very High Risk Prostate Cancer Process 0 0 0 0 Registry' }).getByRole('checkbox', { name: 'Toggle Row Selected' }).uncheck();
  //await page.getByRole('row', { name: 'Toggle Row Selected 110 Influenza Immunization Process 0 0 0 0 EHR' }).getByRole('checkbox', { name: 'Toggle Row Selected' }).uncheck();
  await page.getByRole('row', { name: 'Toggle Row Selected 128 Body Mass Index (BMI) Screening and Follow-Up Plan Process 31 64 48.4 6.3 EHR' }).getByRole('checkbox', { name: 'Toggle Row Selected' }).uncheck();
  //await page.getByRole('row', { name: 'Toggle Row Selected 130 Current Medications Documentation Process 149 164 90.9 4.6 EHR' }).getByRole('checkbox', { name: 'Toggle Row Selected' }).uncheck();
  //await page.getByRole('row', { name: 'Toggle Row Selected 134 Screening for Clinical Depression and Follow-Up Plan Process 94 98 95.9 10 EHR' }).getByRole('checkbox', { name: 'Toggle Row Selected' }).uncheck();
  await page.getByRole('row', { name: 'Toggle Row Selected 047 Advance Care Planning Process 42 50 84 5.9 Registry' }).getByRole('checkbox', { name: 'Toggle Row Selected' }).check();
  //await page.getByRole('row', { name: 'Toggle Row Selected 104 Adjuvant Hormonal Therapy for High Risk or Very High Risk Prostate Cancer Process 0 0 0 0 Registry' }).getByRole('checkbox', { name: 'Toggle Row Selected' }).check();
 // await page.getByRole('row', { name: 'Toggle Row Selected 110 Influenza Immunization Process 0 0 0 0 EHR' }).getByRole('checkbox', { name: 'Toggle Row Selected' }).check();
  await page.getByRole('row', { name: 'Toggle Row Selected 128 Body Mass Index (BMI) Screening and Follow-Up Plan Process 31 64 48.4 6.3 EHR' }).getByRole('checkbox', { name: 'Toggle Row Selected' }).check();
  //await page.getByRole('row', { name: 'Toggle Row Selected 130 Current Medications Documentation Process 149 164 90.9 4.6 EHR' }).getByRole('checkbox', { name: 'Toggle Row Selected' }).check();
  //await page.getByRole('row', { name: 'Toggle Row Selected 134 Screening for Clinical Depression and Follow-Up Plan Process 94 98 95.9 10 EHR' }).getByRole('checkbox', { name: 'Toggle Row Selected' }).check();
  //await page.getByRole('row', { name: 'Toggle Row Selected 047 Advance Care Planning Process 42 50 84 5.9 Registry' }).getByTestId('headerCheckbox' ).check();
  await page.getByRole('button', { name: 'Next Next' }).click();
  await page.getByLabel('Actions to Limit or Restrict Interoperability   Attestation - I have not knowingly and willfully taken action to limit or   restrict the compatibility or interoperability of certified EHR technology. I   have responded to requests to retrieve or exchange information - including   requests from patients and other health care providers regardless of the   requestor\'s affiliation or technology. I have implemented appropriate   standards and processes to ensure that its certified EHR technology was   connected in accordance with applicable law and standards, allowed patients   timely access to their electronic health information; and supported exchange   of electronic health information with other health care providers.').uncheck();
  await page.getByLabel('ONC Direct Review Attestation - I have (1) acknowledged   the requirement to cooperate in good faith with ONC direct review health   information technology certified under the ONC Health IT Certification   Program if a request to assist in ONC direct review is received; AND (2) if   requested, cooperated in good faith with ONC direct review of his or her   health information technology certified under the ONC Health IT Certification   Program as authorized by 45 CFR part 170, subpart E, to the extent that such   technology meets (or can be used to meet) the definition of CEHRT, including   by permitting timely access to such technology and demonstrating its   capabilities as implemented and used by the MIPS eligible clinician in the   field.').uncheck();
  await page.getByLabel('I have completed my security risk analysis which   includes \'Conducting or reviewing a security risk analysis in accordance with   the requirements in 45 CFR 164.308(a)(1), including addressing the security   (to include encryption) of ePHI data created or maintained by certified   electronic health record technology (CEHRT) in accordance with requirements   in 45 CFR 164.312(a)(2)(iv) and 45 CFR 164.306(d)(3), implement security   updates as necessary, and correct identified security deficiencies as part of   the MIPS eligible clinician’s risk management process.').uncheck();
  await page.getByLabel('Actions to Limit or Restrict Interoperability   Attestation - I have not knowingly and willfully taken action to limit or   restrict the compatibility or interoperability of certified EHR technology. I   have responded to requests to retrieve or exchange information - including   requests from patients and other health care providers regardless of the   requestor\'s affiliation or technology. I have implemented appropriate   standards and processes to ensure that its certified EHR technology was   connected in accordance with applicable law and standards, allowed patients   timely access to their electronic health information; and supported exchange   of electronic health information with other health care providers.').check();
  await page.getByLabel('ONC Direct Review Attestation - I have (1) acknowledged   the requirement to cooperate in good faith with ONC direct review health   information technology certified under the ONC Health IT Certification   Program if a request to assist in ONC direct review is received; AND (2) if   requested, cooperated in good faith with ONC direct review of his or her   health information technology certified under the ONC Health IT Certification   Program as authorized by 45 CFR part 170, subpart E, to the extent that such   technology meets (or can be used to meet) the definition of CEHRT, including   by permitting timely access to such technology and demonstrating its   capabilities as implemented and used by the MIPS eligible clinician in the   field.').check();
  await page.getByLabel('I have completed my security risk analysis which   includes \'Conducting or reviewing a security risk analysis in accordance with   the requirements in 45 CFR 164.308(a)(1), including addressing the security   (to include encryption) of ePHI data created or maintained by certified   electronic health record technology (CEHRT) in accordance with requirements   in 45 CFR 164.312(a)(2)(iv) and 45 CFR 164.306(d)(3), implement security   updates as necessary, and correct identified security deficiencies as part of   the MIPS eligible clinician’s risk management process.').check();
  await page.locator('div').filter({ hasText: /^Yes$/ }).getByRole('checkbox').uncheck();
  await page.locator('div').filter({ hasText: /^Yes$/ }).getByRole('checkbox').check();
 // await page.locator('#group-imr div').filter({ hasText: '1: Does not administer any immunizations to any of the populations for which dat' }).locator('#imr').uncheck();
  await page.locator('#group-imr div').filter({ hasText: '1: Does not administer any immunizations to any of the populations for which dat' }).locator('#imr').check();
  //await page.locator('#group-ssr div').filter({ hasText: '1: Does not treat or diagnose any reportable diseases for which data is collecte' }).locator('#ssr').uncheck();
  await page.locator('#group-ssr div').filter({ hasText: '1: Does not treat or diagnose any reportable diseases for which data is collecte' }).locator('#ssr').check();
  await page.getByLabel('I understand that the total number of providers in my practice, not just the MIPS eligible providers, are assessed by CMS to determine the points that I can achieve for my Improvement Activities. I attest that I have made my Improvement Activity selections based on the total number of providers associated with our practice TIN.').uncheck();
  await page.getByLabel('I understand that the total number of providers in my practice, not just the MIPS eligible providers, are assessed by CMS to determine the points that I can achieve for my Improvement Activities. I attest that I have made my Improvement Activity selections based on the total number of providers associated with our practice TIN.').check();
  await page.getByLabel('You will be sending Promoting Interoperability Category with a zero in the Numerator for Provide patients electronic access to their health information.').uncheck();
  await page.getByLabel('You will be sending Promoting Interoperability Category with a zero in the Numerator for Provide patients electronic access to their health information.').check();
  await page.getByLabel('You have not selected 6 or more QM measures, please confirm your selections.').uncheck();
  await page.getByLabel('You have not selected 6 or more QM measures, please confirm your selections.').check();
  await page.getByRole('button', { name: 'Save', exact: true }).click();
//await page.goto('https://mdanalyticstst.mckesson.com/dsbm/selection');
//await page.getByRole('button', { name: 'Data Submission' }).click();
//await page.getByRole('link', { name: 'Selections' }).click();
  await expect(page.getByRole('heading', { name: 'Data saved successfully' })).toHaveText("Data saved successfully");
  await expect(page.getByRole('row', { name: 'Toggle Row Selected IA_PM_21 Population Management Advance Care Planning Medium 20 10' }).getByRole('checkbox', { name: 'Toggle Row Selected' })).toBeChecked({ timeout: 8000});
  await page.getByRole('button', { name: 'Next Next' }).click();
  await expect(page.getByRole('row', { name: 'Toggle Row Selected 047 Advance Care Planning Process 42 50 84 5.9 Registry' }).getByRole('checkbox', { name: 'Toggle Row Selected' })).toBeChecked({timeout: 8000});
  
  //await expect(page.getByRole('row', { name: 'Toggle Row Selected 047 Advance Care Planning Process 42 50 84 5.9 Registry' }).getByRole('checkbox', { name: 'Toggle Row Selected' })).toHaveText("Toggle Row Selected 047 Advance Care Planning Process 42 50 84 5.9 Registry");
  const row = await page.locator('tr:has-text("047")');
  await expect( row.getByRole('cell', { name: '5.9', exact: true })).toBeVisible();
  await expect( row.getByRole('cell', { name: '50', exact: true })).toBeVisible();
  await expect( row.getByRole('cell', { name: '84', exact: true })).toBeVisible();

  const row1 = await page.locator('tr:has-text("PIMSH12")');
  await expect( row1.getByRole('cell', { name: '3', exact: true })).toBeVisible();
  await expect( row1.getByRole('cell', { name: '66', exact: true })).toBeVisible();
  await expect( row1.getByRole('cell', { name: '103', exact: true })).toBeVisible();
  

   //await page.getByRole('cell', { name: '5.9', exact: true }).click();
  //await expect(getByRole('row', { name: 'Toggle Row Selected IA_PM_16 Population Management Implementation of medication management practice improvements Medium 20 10' }).getByRole('checkbox', { name: 'Toggle Row Selected' })).toBeChecked();
 //const Locator = page.locator("table#table tr");
 //Locator.locator(":scope",new Locator.getByText("Advance Care Planning").locator)  
   //const rows = page.locator(":scope",has_text);
  await browser.close();
});