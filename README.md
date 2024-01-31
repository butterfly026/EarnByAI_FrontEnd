## 3-5

- [ ] The withdrawal window doesn't close after a successful withdrawal.
- [ ] During personal information verification, the WAITING status should be displayed on the frontend.

## 3-3

- [x] Web3 error prompt, most likely due to not receiving address information.

  - Completed, needs further testing.

- [x] Separate jackpot target and distribution values, add them to backend configuration parameters.

  - Completed, airdrop distribution needs further testing.

- [ ] User information popup for the jackpot list.
  Hide.

- [x] Check personal yield transactions again for missing statistical entry points.

- [x] Refresh the UnLock bonus.

- [x] Referral rewards should only be distributed upon staking.

  - Completed, needs testing.

- [x] Language packs.

  - Frontend files are ready, waiting for translation.
  - Backend files are ready, waiting for translation.

- [x] Provide rejection reasons for failed identity verification and send an internal message/update backend with rejection reasons.
  - [x] Backend added verification fields.
  - [x] Frontend shows corresponding status on three cards.

- [x] Support backend.

- [x] Support backend.

  - [x] Add a close button.
  - [x] Add a status field to the table, add whether it is unresolved (backend_is_new).
  - [x] Add an update time and sorting.

- [ ] Manual exchange may have issues, does the coin price change manually?

- [x] After manual exchange, the page should be refreshed.

- [ ] Airdrop distribution not tested.

- [ ] Potential issue, trial end may not refresh jackpot balance.

  - [ ] Test without enabling automatic airdrop.

- [ ] Backend API: When running earnings in scheduled tasks, handle automatic staking (per warehouse completed, untested) (full warehouse incomplete).

- [ ] Small probability of errors due to default language packs, clearing the cache can solve it.

- [ ] Make some backend task logs more detailed.

- [x] Clicking on staking in assets->wallet should show loading, web3 transaction amount is 0.

- [ ] After completing exchange airdrop, refresh and check.

Test Nginx: 
Execute sh build.sh in the cb-customer root directory.
In the cb-nginx project, switch to the local-dev branch, then run: sh build.sh in the root directory.
