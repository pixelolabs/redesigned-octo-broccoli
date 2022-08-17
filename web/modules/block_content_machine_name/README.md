Block content machine name
--------
Block content machine name adds machine_name field for block_content block
content type. Which is used to define the specific block template for that
specific block.

New Projects: read me !!
--------
We have removed the machine_name field from the form, check this link:
[#2685749: Add a 'machine_name' widget for string field types with a UniqueField constraint](https://www.drupal.org/files/issues/2021-06-03/2685749-92.patch)
With the latest update of module, we will use the info value as a machine name only.

For Drupal 8:
--------
After successful installation the module will provide additional template
suggestion for FE.
- block--block_content--[MACHINE_NAME].html.twig

i.e. If you have block_content created for copyright block. Then You will have
template suggestions as listed below.
- block--block_content--copyright.html.twig
- block-content--MACHINE_NAME
- block-type-block-content

you can also add template suggestion in block content while create / edit of
the block. With this feature you can use the same template again and again for
different block contents.


Author/Maintainer
-----------------

- [Mitesh Patel](https://www.drupal.org/u/miteshmap)
