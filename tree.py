#!/usr/bin/env python3

import os
import sys
from pathlib import Path

def generate_tree(directory='.', prefix='', is_last=True, max_depth=None, current_depth=0):
    """Generate a tree-like representation of the directory structure."""
    if max_depth is not None and current_depth > max_depth:
        return
    
    # Get the base name of the directory
    base = os.path.basename(directory)
    
    # Calculate connector types
    connector = '└── ' if is_last else '├── '
    
    # Print the current directory with its connector
    print(f"{prefix}{connector}{base}")
    
    # Update the prefix for children
    child_prefix = prefix + ('    ' if is_last else '│   ')
    
    # List items in the directory
    try:
        # Filter out hidden files/folders (those starting with '.')
        items = [item for item in os.listdir(directory) if not item.startswith('.')]
        items.sort()
        
        # Count the number of items
        count = len(items)
        
        # Process each item
        for i, item in enumerate(items):
            item_path = os.path.join(directory, item)
            is_dir = os.path.isdir(item_path)
            
            # Check if this is the last item
            is_item_last = (i == count - 1)
            
            if is_dir:
                # If it's a directory, recurse
                generate_tree(item_path, child_prefix, is_item_last, max_depth, current_depth + 1)
            else:
                # If it's a file, just print it
                file_connector = '└── ' if is_item_last else '├── '
                print(f"{child_prefix}{file_connector}{item}")
    
    except PermissionError:
        print(f"{child_prefix}└── [Permission Denied]")
    except Exception as e:
        print(f"{child_prefix}└── [Error: {str(e)}]")

if __name__ == "__main__":
    # Get directory from command line or use current directory
    target_dir = sys.argv[1] if len(sys.argv) > 1 else '.'
    
    # Get max depth from command line if provided
    max_depth = None
    if len(sys.argv) > 2:
        try:
            max_depth = int(sys.argv[2])
        except ValueError:
            print(f"Error: The depth argument must be an integer. Got '{sys.argv[2]}'")
            sys.exit(1)
    
    print(f"Directory structure of: {os.path.abspath(target_dir)}")
    print("─" * 50)
    
    # Start the recursive tree generation
    generate_tree(Path(target_dir), '', True, max_depth)