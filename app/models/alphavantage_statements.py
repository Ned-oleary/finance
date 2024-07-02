
## Didn't end up using any of this. Keeping as comments in case there's a future need

# class IncomeStatement:
#     def __init__(self, data: dict) -> None:
#         self.set_attributes(data)

#     def set_attributes(self, data: dict) -> None:
#         self.fiscal_date_ending = data["fiscalDateEnding"]
#         self.reported_currency = data["reportedCurrency"]
#         self.total_assets = data["totalAssets"]
#         self.total_current_assets = data["totalCurrentAssets"]
#         self.cash_and_cash_equivalents_at_carrying_value = data["cashAndCashEquivalentsAtCarryingValue"]
#         self.cash_and_short_term_investments = data["cashAndShortTermInvestments"]
#         self.inventory = data["inventory"]
#         self.current_net_receivables = data["currentNetReceivables"]
#         self.total_non_current_assets = data["totalNonCurrentAssets"]
#         self.property_plant_equipment = data["propertyPlantEquipment"]
#         self.accumulated_depreciation_amortization_ppe = data["accumulatedDepreciationAmortizationPPE"]
#         self.intangible_assets = data["intangibleAssets"]
#         self.intangible_assets_excluding_goodwill = data["intangibleAssetsExcludingGoodwill"]
#         self.goodwill = data["goodwill"]
#         self.investments = data["investments"]
#         self.long_term_investments = data["longTermInvestments"]
#         self.short_term_investments = data["shortTermInvestments"]
#         self.other_current_assets = data["otherCurrentAssets"]
#         self.other_non_current_assets = data["otherNonCurrentAssets"]
#         self.total_liabilities = data["totalLiabilities"]
#         self.total_current_liabilities = data["totalCurrentLiabilities"]
#         self.current_accounts_payable = data["currentAccountsPayable"]
#         self.deferred_revenue = data["deferredRevenue"]
#         self.current_debt = data["currentDebt"]
#         self.short_term_debt = data["shortTermDebt"]
#         self.total_non_current_liabilities = data["totalNonCurrentLiabilities"]
#         self.capital_lease_obligations = data["capitalLeaseObligations"]
#         self.long_term_debt = data["longTermDebt"]
#         self.current_long_term_debt = data["currentLongTermDebt"]
#         self.long_term_debt_noncurrent = data["longTermDebtNoncurrent"]
#         self.short_long_term_debt_total = data["shortLongTermDebtTotal"]
#         self.other_current_liabilities = data["otherCurrentLiabilities"]
#         self.other_non_current_liabilities = data["otherNonCurrentLiabilities"]
#         self.total_shareholder_equity = data["totalShareholderEquity"]
#         self.treasury_stock = data["treasuryStock"]
#         self.retained_earnings = data["retainedEarnings"]
#         self.common_stock = data["commonStock"]
#         self.common_stock_shares_outstanding = data["commonStockSharesOutstanding"]

# class CashFlowStatement:
#     def __init__(self, data: dict) -> None:
#         self.set_attributes(data)
    
#     def set_attributes(self, data: dict) -> None:
#         self.fiscal_date_ending = data["fiscalDateEnding"]
#         self.reported_currency = data["reportedCurrency"]
#         self.operating_cashflow = data["operatingCashflow"]
#         self.payments_for_operating_activities = data["paymentsForOperatingActivities"]
#         self.proceeds_from_operating_activities = data["proceedsFromOperatingActivities"]
#         self.change_in_operating_liabilities = data["changeInOperatingLiabilities"]
#         self.change_in_operating_assets = data["changeInOperatingAssets"]
#         self.depreciation_depletion_and_amortization = data["depreciationDepletionAndAmortization"]
#         self.capital_expenditures = data["capitalExpenditures"]
#         self.change_in_receivables = data["changeInReceivables"]
#         self.change_in_inventory = data["changeInInventory"]
#         self.profit_loss = data["profitLoss"]
#         self.cashflow_from_investment = data["cashflowFromInvestment"]
#         self.cashflow_from_financing = data["cashflowFromFinancing"]
#         self.proceeds_from_repayments_of_short_term_debt = data["proceedsFromRepaymentsOfShortTermDebt"]
#         self.payments_for_repurchase_of_common_stock = data["paymentsForRepurchaseOfCommonStock"]
#         self.payments_for_repurchase_of_equity = data["paymentsForRepurchaseOfEquity"]
#         self.payments_for_repurchase_of_preferred_stock = data["paymentsForRepurchaseOfPreferredStock"]
#         self.dividend_payout = data["dividendPayout"]
#         self.dividend_payout_common_stock = data["dividendPayoutCommonStock"]
#         self.dividend_payout_preferred_stock = data["dividendPayoutPreferredStock"]
#         self.proceeds_from_issuance_of_common_stock = data["proceedsFromIssuanceOfCommonStock"]
#         self.proceeds_from_issuance_of_long_term_debt_and_capital_securities_net = data["proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet"]
#         self.proceeds_from_issuance_of_preferred_stock = data["proceedsFromIssuanceOfPreferredStock"]
#         self.proceeds_from_repurchase_of_equity = data["proceedsFromRepurchaseOfEquity"]
#         self.proceeds_from_sale_of_treasury_stock = data["proceedsFromSaleOfTreasuryStock"]
#         self.change_in_cash_and_cash_equivalents = data["changeInCashAndCashEquivalents"]
#         self.change_in_exchange_rate = data["changeInExchangeRate"]
#         self.net_income = data["netIncome"]

# class BalanceSheet:
#     def __init__(self, data: dict) -> None:
#         self.set_attributes(data)
    
#     def set_attributes(self, data: dict) -> None:
#         self.fiscal_date_ending = data["fiscalDateEnding"]
#         self.reported_currency = data["reportedCurrency"]
#         self.total_assets = data["totalAssets"]
#         self.total_current_assets = data["totalCurrentAssets"]
#         self.cash_and_cash_equivalents_at_carrying_value = data["cashAndCashEquivalentsAtCarryingValue"]
#         self.cash_and_short_term_investments = data["cashAndShortTermInvestments"]
#         self.inventory = data["inventory"]
#         self.current_net_receivables = data["currentNetReceivables"]
#         self.total_non_current_assets = data["totalNonCurrentAssets"]
#         self.property_plant_equipment = data["propertyPlantEquipment"]
#         self.accumulated_depreciation_amortization_ppe = data["accumulatedDepreciationAmortizationPPE"]
#         self.intangible_assets = data["intangibleAssets"]
#         self.intangible_assets_excluding_goodwill = data["intangibleAssetsExcludingGoodwill"]
#         self.goodwill = data["goodwill"]
#         self.investments = data["investments"]
#         self.long_term_investments = data["longTermInvestments"]
#         self.short_term_investments = data["shortTermInvestments"]
#         self.other_current_assets = data["otherCurrentAssets"]
#         self.other_non_current_assets = data["otherNonCurrentAssets"]
#         self.total_liabilities = data["totalLiabilities"]
#         self.total_current_liabilities = data["totalCurrentLiabilities"]
#         self.current_accounts_payable = data["currentAccountsPayable"]
#         self.deferred_revenue = data["deferredRevenue"]
#         self.current_debt = data["currentDebt"]
#         self.short_term_debt = data["shortTermDebt"]
#         self.total_non_current_liabilities = data["totalNonCurrentLiabilities"]
#         self.capital_lease_obligations = data["capitalLeaseObligations"]
#         self.long_term_debt = data["longTermDebt"]
#         self.current_long_term_debt = data["currentLongTermDebt"]
#         self.long_term_debt_noncurrent = data["longTermDebtNoncurrent"]
#         self.short_long_term_debt_total = data["shortLongTermDebtTotal"]
#         self.other_current_liabilities = data["otherCurrentLiabilities"]
#         self.other_non_current_liabilities = data["otherNonCurrentLiabilities"]
#         self.total_shareholder_equity = data["totalShareholderEquity"]
#         self.treasury_stock = data["treasuryStock"]
#         self.retained_earnings = data["retainedEarnings"]
#         self.common_stock = data["commonStock"]
#         self.common_stock_shares_outstanding = data["commonStockSharesOutstanding"]
        
# # comment