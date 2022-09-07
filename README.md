# Stimulus Controllers

A collection of reusable Stimulus JS controllers.

## Provided Controllers

### Confirm Submit

This controller adds "confirm" functionality to an HTML button element. When clicking the button, it will update the
text to display the confirmation label text, and require an additional click before the button click event is triggered.

```html
<button name="submit" 
        class="btn btn-warning"
        data-controller="confirm-submit"
        data-confirm-submit-confirmation-label-value="Click to confirm?"
        data-confirm-submit-warning-class="btn-danger"
        data-action="click->confirm-submit#click"
>
    Add To Cart
</button>
```

## Contributing

Contributions are welcome. Please submit pull requests with one fix/feature per
pull request.

## Licence

This software is provided under the MIT licence and can be freely reused. Please see the LICENSE file for full details.

