# RibsFlashMessage

This module is used to display little notification message

## How install it ?

```
npm install ribs-flash-message
```

## How use it ?

You have just to add followings lines to you head in html
```HTML
<link rel="stylesheet" src="node_modules/ribs-flash-message/dist/css/style.css" />
```

And in you file you have can use those blocks 
```HTML
<!-- to display an information message -->
<div class="RibsFlashMessage info">
	<div class="notification">
		<div class="left">
			<div class="icone">
				<i class='fa fa-info'></i>
			</div>
		</div>
		<div class="right">
			<p>test</p>
		</div>
	</div>
</div>

<!-- to display an error message -->		
<div class="RibsFlashMessage error">
	<div class="notification">
		<div class="left">
			<div class="icone">
				<i class='fa fa-info'></i>
			</div>
		</div>
		<div class="right">
			<p>test</p>
		</div>
	</div>
</div>

<!-- to display a success message -->
<div class="RibsFlashMessage success">
	<div class="notification">
		<div class="left">
			<div class="icone">
				<i class='fa fa-info'></i>
			</div>
		</div>
		<div class="right">
			<p>test</p>
		</div>
	</div>
</div>
```

At the end of the body you have to add this script
```HTML
<script src="node_modules/ribs-flash-message/dist/js/ribs-flash-message.js"></script>
```
