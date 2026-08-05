export function transFormOpen (){
    const formCard = ` <div class="w-full h-full rounded-2xl border border-slate-200 bg-transparent p-8 shadow-sm absolute backdrop-blur-sm flex justify-center items-center hidden" id="transFormCard">

    <div class="w-max h-max bg-white rounded-2xl border-slate-200 p-8 shadow-sm ">
        <!-- Header -->
        <div class="mb-8">
            <h2 class="text-3xl font-bold text-slate-800">
                Add Transaction
            </h2>
            <p class="mt-2 text-sm text-slate-500">
                Record a new income or expense.
            </p>
        </div>
        <form class="space-y-6">
            <!-- Type -->
            <div>
                <label class="mb-3 block text-sm font-semibold text-slate-700">
                    Transaction Type
                </label>
                <div class="grid grid-cols-2 gap-4">
                    <button type="button"
                        class="rounded-xl border-2 border-emerald-500 bg-emerald-50 py-4 font-semibold text-emerald-600 transition hover:bg-emerald-100">
                        Income
                    </button>
                    <button type="button"
                        class="rounded-xl border border-slate-300 py-4 font-semibold text-slate-600 transition hover:bg-slate-100">
                        Expense
                    </button>
                </div>
            </div>
            <!-- Amount -->
            <div>
                <label class="mb-2 block text-sm font-semibold text-slate-700">
                    Amount
                </label>
                <input
                    type="number"
                    placeholder="₹0.00"
                    class="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100">
            </div>
            <!-- Description -->
            <div>
                <label class="mb-2 block text-sm font-semibold text-slate-700">
                    Description
                </label>
                <input
                    type="text"
                    placeholder="Netflix Subscription"
                    class="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100">
            </div>
            <!-- Category -->
            <div>
                <label class="mb-2 block text-sm font-semibold text-slate-700">
                    Category
                </label>
                <select
                    class="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100">
                    <option>Food</option>
                    <option>Shopping</option>
                    <option>Travel</option>
                    <option>Salary</option>
                    <option>Investment</option>
                    <option>Utilities</option>
                </select>
            </div>
            <!-- Date -->
            <div>
                <label class="mb-2 block text-sm font-semibold text-slate-700">
                    Date
                </label>
                <input
                    type="date"
                    class="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100">
            </div>
            <!-- Notes -->
            <div>
                <label class="mb-2 block text-sm font-semibold text-slate-700">
                    Notes (Optional)
                </label>
                <textarea
                    rows="4"
                    placeholder="Additional details..."
                    class="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"></textarea>
            </div>
            <!-- Buttons -->
            <div class="flex justify-end gap-4 pt-4">
                <button
                    type="button"
                    class="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-600 transition hover:bg-slate-100">
                    Cancel
                </button>
                <button
                    type="submit"
                    class="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white shadow transition hover:bg-sky-600">
                    Save Transaction
                </button>
            </div>
        </form>
    </div>

</div>`
    document.body.append
}