module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    let mat = [];
    matrix.forEach((el, index) => {
        if (index % 2 === 0) {
            mat.push(...el);
        } else {
            mat.push(...el.reverse());
        }
    });
    return mat;
};
