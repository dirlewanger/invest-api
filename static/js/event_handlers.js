$(document).ready(() => {

    $(document).on('click', `[id^='stock-']`, function () {
        const ticker = this.id.replace('stock-', '');
        const tabButton = $(`.tab-link[data-target='chart-${ticker}']`);
        tabButton.click();
    });

    $(document).on('click', `[id^='stock-']`, function () {
        const ticker = this.id.replace('stock-', '');
        const tabButton = $(`.tab-link[data-target='chart-${ticker}']`);
        tabButton.click();
    });

})